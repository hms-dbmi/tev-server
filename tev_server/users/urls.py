from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^register/', views.register, name='register'),
    url(r'^register_user/', views.register_user, name='register_user'),
    url(r'login/', views.loginView, name='login'),
    url(r'loggedin/', views.loggedinView, name='loggedin'),
    url(r'logout/', views.loggedoutView, name='loggedout'),
    url(r'patients/', views.userPatientPage, name='patients')
]