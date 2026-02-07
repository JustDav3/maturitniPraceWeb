from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Ahoj! Tohle je moje maturitní práce na Renderu.</h1>")