from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('add_power_to_hero', views.add_power_to_hero),
]
