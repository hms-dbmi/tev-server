from django.shortcuts import render, HttpResponse, redirect
from .forms import TevData, PatientIdentifier, Physician, Hospital, CancerType
from .models import tevSample, patient
from .serializers import tevSampleSerializer, patientSerializer
from rest_framework import viewsets

def index(request):
    file = TevData()
    patientid = PatientIdentifier()
    physician = Physician()
    hospital = Hospital()
    cancertype = CancerType()
    context = {'file': file,
               'patientid': patientid,
               'physician': physician,
               'hospital': hospital,
               'cancertype': cancertype}
    return render(request, 'data_input/index.html', context)

class tevSampleViewSet(viewsets.ModelViewSet):
    queryset = tevSample.objects.all()
    serializer_class = tevSampleSerializer

class patientViewSet(viewsets.ModelViewSet):
    queryset = patient.objects.all()
    serializer_class = patientSerializer

def data_to_database(request):
    data = request.POST
    patientInfo = patient()
    patientInfo.Patient_Identifier= data['patient']
    patientInfo.Physician = data['physician']
    patientInfo.Hospital = data['hospital']
    patientInfo.Cancer_Type = data['cancertype']
    patientInfo.save()

    file = request.FILES.get('file')
    file = file.read()
    file = file.split('\n')
    file = [row.split('\t') for row in file]

    for i in range(1, len(file)):
        results = tevSample()
        results.patient = patientInfo
        results.Hugo_Symbol = file[i][0]
        results.AA_Change = file[i][1]
        results.allele = file[i][0] + '-' + file[i][1]
        results.Sample_Barcode = file[i][2]
        results.alt_count = int(file[i][3])
        results.ref_count = int(file[i][4])
        results.save()

    request.session['patient_id'] = patientInfo.id

    return redirect('plots:index')

