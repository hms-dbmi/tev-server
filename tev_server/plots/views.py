from django.shortcuts import render, HttpResponse

def index(request):
    patient_id = request.session['patient_id']
    context = {'patient_id': patient_id}
    return render(request, 'plots/index.html', context)
