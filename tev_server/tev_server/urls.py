"""tev_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from data_input import views as data_input_views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'api/v1/sources', data_input_views.SourceRESTAPI)
router.register(r'api/v1/samples', data_input_views.SampleRESTAPI)
router.register(r'api/v1/genes', data_input_views.GeneRESTAPI)
router.register(r'api/v1/allele_variants', data_input_views.VariantAlleleRESTAPI)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^input/', include('data_input.urls')),
    url(r'^', include(router.urls)),
    url(r'^plots/', include('plots.urls')),
    url(r'^data/', include('data_manager.urls'))
]
