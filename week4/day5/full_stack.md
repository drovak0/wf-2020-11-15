# Full Stack Django

## Models

```python
from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

```

## REST Routes

```python
# HTTP Method     Url                     Views functions       Purpose
# GET             /locations              locations_show        Display all Locations
# GET             /locations/new          locations_new         Show form to add new Location
# GET             /locations/:id          locations_show        Display one Location
# GET             /locations/:id/edit     locations_edit        Show form to edit specific Location
# POST            /locations              locations_create      Create Location
# PUT/PATCH       /locations/:id          locations_update      Update specific Location
# DELETE          /locations/:id          locations_destroy     Delete specific Location

# Render
path('locations', views.locations_show),
path('locations/new', views.locations_new),
path('locations/<int:location_id>', views.locations_show),
path('locations/<int:location_id>/edit', views.locations_edit),
# Redirect
path('locations', views.locations_create),
path('locations/<int:location_id>', views.locations_update),
path('locations/<int:location_id>', views.locations_destroy),

```

## CRUD

### Create

```python

```

### Read

```python

```

### Update

```python

```

### Delete

```python

```
