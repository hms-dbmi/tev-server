from django.shortcuts import render, HttpResponse
from scipy.spatial.distance import pdist
from scipy.cluster.hierarchy import linkage, to_tree
import json
from data_manager.models import Source

def index(request):
    if 'source' in request.GET:
        source = request.GET['source']
    else:
        source = request.session['source']
        print(source)

    cluster_results = cluster(request, source)
    d3_dendro_data = cluster_results[0]
    dendro_y_data = cluster_results[1]
    d3_dendro_data = json.dumps(d3_dendro_data)

    #Different researchers might give their patients the same ID
    #Data will be filtered from REST API by researcher/patient ID combination
    context = {'source': source,
               'd3_dendro_data': d3_dendro_data,
               'dendro_y_data': dendro_y_data}

    return render(request, 'plots/index.html', context)


def add_node(node, parent, alleles, y_array):
    # First create the new node and append it to its parent's children
    newNode = dict(children=[], name=node.id)
    if newNode['name'] >= len(alleles):
        newNode['name'] = " "
    else:
        newNode['name'] = alleles[newNode['name']]

    parent["children"].append(newNode)
    #Append distance to y_array
    y_array.append(node.dist)

    # Recursively add the current node's children
    if node.left:
        add_node(node.left, newNode, alleles, y_array)
    if node.right:
        add_node(node.right, newNode, alleles, y_array)

def cluster(request, source):
    samples = Source.objects.get(uuid=source).Samples.get_queryset()
    data = []
    for sample in samples:
        for allele in sample.VariantAlleles.get_queryset():
            data.append({'allele': str(allele),
                         'alternative_freq': allele.alternative_freq,
                         'timepoint': allele.sample.timepoint})

    data = sorted(data, key=lambda k: (k['allele'], k['timepoint']))

    matrix = []
    row = []
    alleles = []

    current_allele = data[0]['allele']
    for i in range(0, len(data)):
        if(data[i]['allele'] == current_allele):
            row.append(data[i]['alternative_freq'])
        else:
            #If a variant wasn't around at a timepoint, fill in a VAF of 0 for that timepoint
            if(len(row) < len(samples)):
                empty_timepoint = len(samples) - len(row)
                zeroes = [0]*empty_timepoint
                row = row + zeroes
            matrix.append(row)
            row = []
            alleles.append(current_allele)
            current_allele = data[i]['allele']
            row.append(data[i]['alternative_freq'])

    #Append last row to matrix
    if(len(row) < len(samples)):
                empty_timepoint = len(samples) - len(row)
                zeroes = [0]*empty_timepoint
                row = row + zeroes
    matrix.append(row)
    alleles.append(current_allele)


    data_dist = pdist(matrix) # computing the distance
    data_link = linkage(data_dist, method='complete')
    cluster_tree = to_tree(data_link, rd=False)
    d3Dendro = dict(children=[], name="Root1")
    #Will hold all of the y-value positions for the nodes on the dendrogram
    y_array = []
    add_node(cluster_tree, d3Dendro, alleles, y_array)
    #clip root tip
    d3Dendro = d3Dendro['children'][0]
    return [d3Dendro, y_array]