from django.shortcuts import render, HttpResponse, redirect
from .forms import tevInput
from .models import tevSample
from .serializers import tevSampleSerializer
from rest_framework import viewsets

def index(request):
    file = tevInput()
    context = {'file': file}
    return render(request, 'data_input/index.html', context)

class tevSampleViewSet(viewsets.ModelViewSet):
    queryset = tevSample.objects.all()
    serializer_class = tevSampleSerializer

def data_to_database(request):
    file = request.FILES.get('file')
    file = file.read()
    file = file.split('\n')
    file =  [row.split('\t') for row in file]

    for i in range(1, len(file)):
        results = tevSample()
        results.Hugo_Symbol = file[i][0]
        results.AA_Change = file[i][1]
        results.Sample_Barcode = file[i][2]
        results.alt_count = int(file[i][3])
        results.ref_count = int(file[i][4])
        results.save()
    return redirect('plots:index')

