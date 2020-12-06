from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('dashboard', views.dashboard),
    path('logout', views.logout),
]
