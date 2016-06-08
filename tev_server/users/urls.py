from django.conf.urls import url
from . import views

app_name = 'users'

urlpatterns = [
    url(r'^register/', views.register, name='register'),
    url(r'^register_user/', views.register_user, name='register_user'),
    url(r'^login/', views.loginView, name='loginView'),
    url(r'^loggedin/', views.loggedinView, name='loggedinView'),
    url(r'^logout/', views.loggedoutView, name='loggedoutView'),
    url(r'^patients/$', views.patientsList, name='patientsList'),
    url(r'^patients/(?P<PatientID>[A-Za-z0-9_.]+)/', views.patientProfile, name='patientProfile')
]