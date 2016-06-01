from django.conf.urls import url, include
from . import views

app_name = 'data_input'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^data_to_database/', views.data_to_database, name='data_to_database')
]