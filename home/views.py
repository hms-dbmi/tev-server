from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    context = {}
    return render(request, 'home/index.html', context)

def usage(request):
    context = {'usage_video_url': 'https://youtu.be/XC8--D24OoI'}
    return render(request, 'home/usage.html', context)