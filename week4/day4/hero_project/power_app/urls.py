from django.urls import path

from . import views

urlpatterns = [
    # Renders views
    path('', views.index), # all heroes
    path('powers', views.all_powers), # all powers
    path('heroes/<int:heroo_id>', views.show_hero),
    path('powers/<int:power_id>', views.show_power),

    # Return redirects
    path('add_power', views.add_power),
    path('add_hero', views.add_hero),
    path('add_power_to_hero', views.add_power_to_hero),  # add m-2-k
]
