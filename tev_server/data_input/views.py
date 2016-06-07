from django.shortcuts import render, HttpResponse, redirect
from .forms import inputForm
from .models import tevSample, patient
from .serializers import tevSampleSerializer, patientSerializer
from rest_framework import viewsets

def index(request):
    input = inputForm()
    context = {'input': input}
    return render(request, 'data_input/index.html', context)

#View for REST API containing only TEV test results
class tevSampleViewSet(viewsets.ModelViewSet):
    queryset = tevSample.objects.all()
    serializer_class = tevSampleSerializer

#View for REST API containing patient data with their TEV test results
class patientViewSet(viewsets.ModelViewSet):
    queryset = patient.objects.all()
    serializer_class = patientSerializer

#View that parses the TEV test results
#Saves patient information and TEV test information to database
def data_to_database(request):
    if str(request.user) != 'AnonymousUser':
        data = request.POST
        patientInfo = patient()
        patientInfo.PatientID = data['patientID']
        patientInfo.Physician = data['physician']
        patientInfo.ResearcherID = request.user.id
        patientInfo.Hospital = data['hospital']
        patientInfo.Cancer_Type = data['cancer_type']
        patientInfo.save()

        #Save the ID of the patient that was just entered in the session
        #Now we can reference it in the views of the plots app
        request.session['PatientID'] = patientInfo.PatientID

        #########################################################
        #  This depends on future files having same structure  #
        ########################################################
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

        return redirect('plots:index')

    else:
        return HttpResponse('<h1> You must be logged in to enter data </h1>')

