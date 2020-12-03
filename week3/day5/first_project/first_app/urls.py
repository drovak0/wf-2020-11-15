from django.urls import include, path  # import include

from . import views

urlpatterns = [
    # Render
    # path('localhost:8000/', views.index),
    path('', views.index),
    path('dashboard', views.show_dashboard),

    # Redirect
    path('login', views.login),
    path('bears/<str:name_i_choose>', views.another_method),
]
