from datetime import datetime

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

        # what is today's date?
        today = datetime.today()
        # convert form data into date obj
        date_time_obj_from_form = datetime.strptime(
            post_data['first_opened_date'], '%Y-%m-%d')
        print(date_time_obj_from_form)

        # make sure date is in the past
        # compare today with date from post_data
        if date_time_obj_from_form > today:
            errors["first_opened_date"] = "Location opened date should be in the past"

        return errors

class Location(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    # add date field
    first_opened_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = LocationManager()
