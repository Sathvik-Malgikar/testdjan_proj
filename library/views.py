from django.shortcuts import render

# Create your views here.

def helloWorld(req):
    return render(req,'index.html')