from django.shortcuts import render, HttpResponse
from data_input.models import patient
from scipy.spatial.distance import pdist
from scipy.cluster.hierarchy import linkage, to_tree
import json, pprint
#View to output plots of TEV test results right when patient first registered
def index(request):
    PatientID = request.session['PatientID']
    d3DendroData = cluster(request, PatientID)
    d3DendroData = json.dumps(d3DendroData)

    #Different researchers might give their patients the same ID
    #Data will be filtered from REST API by researcher/patient ID combination
    context = {'PatientID': PatientID,
               'ResearcherID': request.user.id,
               'd3DendroData': d3DendroData}
    return render(request, 'plots/index.html', context)


def add_node(node, parent, alleles):
    # First create the new node and append it to its parent's children
    newNode = dict(children=[], name=node.id)
    if newNode['name'] >= len(alleles):
        newNode['name'] = " "
    else:
        newNode['name'] = alleles[newNode['name']]
    parent["children"].append(newNode)

    # Recursively add the current node's children
    if node.left: add_node(node.left, newNode, alleles)
    if node.right: add_node(node.right, newNode, alleles)

def cluster(request, PatientID):
    data = patient.objects.get(ResearcherID=request.user.id,
                               PatientID=PatientID).results.get_queryset().order_by('allele')

    matrix = []
    row = []
    alleles = []

    current_allele = data[0].allele
    for i in range(0, len(data)):
        if(data[i].allele == current_allele):
            row.append(data[i].alt_count)
        else:
            matrix.append(row)
            row = []
            alleles.append(current_allele)
            current_allele = data[i].allele
            row.append(data[i].alt_count)
    #Append last row to matrix
    matrix.append(row)
    alleles.append(current_allele)

    data_dist = pdist(matrix) # computing the distance
    data_link = linkage(data_dist, method='complete')
    cluster_tree = to_tree(data_link, rd=False)
    d3Dendro = dict(children=[], name="Root1")
    add_node(cluster_tree, d3Dendro, alleles)
    #clip root tip
    d3Dendro = d3Dendro['children'][0]
    return d3Dendro














