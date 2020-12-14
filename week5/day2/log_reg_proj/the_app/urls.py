from django.urls import path

from . import views

urlpatterns = [
    # Templates
    path('', views.index),
    # reg
    path('register', views.register_user),
    # log
    path('login', views.login_user),
    # dashboard
    path('dashboard', views.show_dashboard),
    path('logout', views.logout_user),
]
