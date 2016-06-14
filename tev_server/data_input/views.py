from django.shortcuts import render, HttpResponse, redirect
from .forms import SourceForm, TevFileForm
from .models import Source, Sample, Gene, VariantAllele
from .serializers import SourceSerializer, SampleSerializer, GeneSerializer, VariantAlleleSerializer
from rest_framework import viewsets
from time import strftime
import re

def index(request):
    source = SourceForm()
    tev_file = TevFileForm()
    context = {'source': source,
               'tev_file': tev_file}
    return render(request, 'data_input/index.html', context)

#View for REST API containing everything nested within a source
class SourceRESTAPI(viewsets.ModelViewSet):
     queryset = Source.objects.all()
     serializer_class = SourceSerializer

class SampleRESTAPI(viewsets.ModelViewSet):
    queryset = Sample.objects.all()
    serializer_class = SampleSerializer

class GeneRESTAPI(viewsets.ModelViewSet):
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer

class VariantAlleleRESTAPI(viewsets.ModelViewSet):
    queryset = VariantAllele.objects.all()
    serializer_class = VariantAlleleSerializer



#View that parses the TEV test results
#Saves patient information and TEV test information to database
def data_to_database(request):
        data = request.POST
        source = Source()
        source.name = data['name']
        source.save()

        #Save the uuid of the source that was just entered in the session
        #Now we can reference it in the views of the plots app
        request.session['source'] = str(source.uuid)

        file = request.FILES.get('file')
        #Parse the Tev file
        parse_tev_file(file, source)

        return redirect('plots:index')



#########################################################
#  This depends on future files having same structure  #
########################################################
def parse_tev_file(file, source):
    file = file.read()
    file = file.split('\n')
    file = [row.split('\t') for row in file]

    #Possible error: Have an empty line at bottom of file from hitting enter
    for i in range(1, len(file)):
        if Sample.objects.filter(source=source, timepoint=file[i][2]).exists():
            sample = Sample.objects.get(source=source, timepoint=file[i][2])
        else:
            sample = Sample()
            sample.timepoint = file[i][2]
            sample.timestamp = strftime("%Y-%m-%d")
            sample.source = source
            sample.save()
        if Gene.objects.filter(hugo_symbol=file[i][0]).exists():
            gene = Gene.objects.get(hugo_symbol=file[i][0])
        else:
            gene = Gene()
            gene.hugo_symbol = file[i][0]
            gene.save()
        variant_allele = VariantAllele()
        AA_change = file[i][1]
        AA_change = re.split('(\d+)', AA_change)
        variant_allele.AA_original = AA_change[0]
        variant_allele.AA_position = int(AA_change[1])
        variant_allele.AA_variant = AA_change[2]
        variant_allele.sample = sample
        variant_allele.gene = gene
        variant_allele.alternative_freq = int(file[i][3])
        variant_allele.reference_freq = int(file[i][4])
        variant_allele.save()