from django.shortcuts import render, HttpResponse
from data_input.models import Source

def sources(request):
    source_table_data = []
    source_data = Source.objects.all();
    for source in source_data:
        name = source.name
        uuid = source.uuid
        timepoints = source.Samples.get_queryset()
        alleles = []
        for i in range(0, len(timepoints)):
            num_of_alleles = int(len(timepoints[i].VariantAlleles.get_queryset()))
            alleles.append(num_of_alleles)
            max_allele = max(alleles)
        source_table_data.append({
            'name': name,
            'uuid': uuid,
            'timepoints': len(timepoints),
            'alleles': max_allele
        })
    context = {'source_table_data': source_table_data}
    return render(request, 'data_manager/sources.html', context)
