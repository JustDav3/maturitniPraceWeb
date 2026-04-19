"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path
from main.views import *
from main import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('ulozit-test/', ulozit_vysledek_testu, name='api_ulozit_test'),
    path('generuj-zadani/', generuj_zadani_api, name='api_generuj_zadani'),


    path('<str:sekce>/', views.home, name='home_sekce'),
    path('uzly/<str:uzel_id>/', views.home, name='home_uzel'),
]
