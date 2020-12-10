from django.urls import path

from . import views

urlpatterns = [
    # Render
    path('locations/new', views.locations_new),
    path('locations', views.locations_show),
    path('locations/<int:location_id>', views.locations_show_single),
    path('locations/<int:location_id>/edit', views.locations_edit),

    # # Redirect
    path('locations/create', views.locations_create),
    path('locations/<int:location_id>/update', views.locations_update),
    path('locations/<int:location_id>/delete', views.locations_destroy),
]
