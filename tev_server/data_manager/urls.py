from django.conf.urls import url, include
from . import views

app_name = 'data_manager'

urlpatterns = [
    url(r'^sources/', views.sources, name='sources'),
    url(r'^input/', views.input, name='input'),
    url(r'^data_to_database/', views.data_to_database, name='data_to_database'),
    url(r'^save_fishplot/', views.save_fishplot, name='save_fishplot')
]
