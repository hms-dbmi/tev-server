from django.shortcuts import render, HttpResponse

#View to output plots of TEV test results right when patient first registered
def index(request):
    PatientID = request.session['PatientID']

    #Different researchers might give their patients the same ID
    #Data will be filtered from REST API by researcher/patient ID combination
    context = {'PatientID': PatientID,
               'ResearcherID': request.user.id}
    return render(request, 'plots/index.html', context)
