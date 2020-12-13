from django.db import models


class LocationManager(models.Manager):
    def basic_validatorzzz(self, post_data):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(post_data['name']) < 3:
            errors["name"] = "Location name should be at least 3 characters"
        if len(post_data['country']) < 3:
            errors["country"] = "Location country should be at least 3 characters"
        if len(post_data['city']) < 3:
            errors["city"] = "Location city should be at least 3 characters"
        if len(post_data['image']) < 3:
            errors["image"] = "Location image should be at least 3 characters"
        return errors

class Location(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = LocationManager()
