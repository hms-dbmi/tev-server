from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    context = {}
    return render(request, 'home/index.html', context)
