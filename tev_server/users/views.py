from django.shortcuts import render, HttpResponse, redirect
from django.http import Http404
from django.contrib.auth.models import User
from .forms import RegisterForm, LoginForm
from django.contrib.auth import authenticate, login, logout
from data_input.views import patient
from tev_server import settings

def register(request):
    register = RegisterForm()
    context = {'register': register}
    return render(request, 'users/register.html', context)

def register_user(request):
    registrationInfo = RegisterForm(request.POST)
    if registrationInfo.is_valid():
        registrationInfo = registrationInfo.cleaned_data
        user = User.objects.create_user(
            username= registrationInfo['username'],
            email= registrationInfo['email'],
            password= registrationInfo['password'],
            first_name = registrationInfo['first_name'],
            last_name = registrationInfo['last_name']
        )
        user.save()

        return HttpResponse("<h1> Registered! </h1>")
    else:
        return HttpResponse("<h1> Not valid </h1>")

def loginView(request):
    login = LoginForm()
    context = {'login': login}
    return render(request, 'users/login.html', context)

def loggedinView(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            return HttpResponse("<h1> Logged in</h1>")
        else:
            return HttpResponse("<h1> You ain't active")
    else:
        return HttpResponse("<h1> You don't exist </h1>")


def loggedoutView(request):
    logout(request)
    return redirect('data_input:index')

def patientsList(request):
    if str(request.user) != 'AnonymousUser':
        patients = patient.objects.filter(ResearcherID=request.user.id)
        context = {'patients': patients}
        return render(request, 'users/patientList.html', context)
    else:
        return HttpResponse("<h1> You need to log in </h1>")


def patientProfile(request, PatientID):
    try:
        patientInfo = patient.objects.get(PatientID=PatientID, ResearcherID=request.user.id)
        tevResults = patientInfo.results.all().order_by('Hugo_Symbol')
        request.session['PatientID'] = PatientID
        context = {'patientInfo': patientInfo,
                   'tevResults': tevResults}
    except patient.DoesNotExist:
        raise Http404("You have no patient with ID " + str(PatientID))
    return render(request, 'users/patientProfile.html', context)


