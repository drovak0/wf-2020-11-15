from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('add_designer', views.create_designer),
    path('add_shirt', views.create_shirt),
]
