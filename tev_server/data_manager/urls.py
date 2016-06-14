from django.conf.urls import url, include
from . import views

app_name = 'data_manager'

urlpatterns = [
    url(r'^sources/', views.sources, name='sources')
]