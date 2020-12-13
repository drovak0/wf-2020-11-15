# Validations

- [x] add validations to location app

## Manager and Model

```python
# Inside your app's models.py file
from django.db import models
# Our custom manager!
# No methods in our new manager should ever receive the whole request object as an argument!
# (just parts, like request.POST)
class LocationManager(models.Manager):
    def basic_validator(self, post_data):
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
    # def another_validator(self, stuff):
    #     errors = {}
    #     # check all the stuff
    #     return errors

class Location(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    """
    models come with a hidden property:
          objects = models.Manager()
    we are going to override this!
    """
    objects = LocationManager()
```

## Create and Update

```python
# Inside your app's views.py file
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages

from .models import Location

def create(request):
    print(request.POST)
    # pass the post data to the method we wrote and save the response in a variable called errors
    errors = Location.objects.basic_validator(request.POST)
        # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/location/new')
    else:
        # if the errors object is empty, that means there were no errors!
        # retrieve the location to be updated, make the changes, and save
        newly_created_location = Location.objects.create(
            name=request.POST['name'],
            country=request.POST['country'],
            city=request.POST['city'],
            image=request.POST['image']
        )
        # redirect to a success route
        return redirect(f'/locations/{newly_created_location.id}')

def update(request, id):
    # pass the post data to the method we wrote and save the response in a variable called errors
    errors = Location.objects.basic_validator(request.POST)
        # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/location/edit/'+id)
    else:
        # if the errors object is empty, that means there were no errors!
        # retrieve the location to be updated, make the changes, and save
        location = Location.objects.get(id = id)
        location.name = request.POST['name']
        location.country = request.POST['country']
        location.city = request.POST['city']
        location.image = request.POST['image']
        location.save()
        messages.success(request, "Location successfully updated")
        # redirect to a success route
        return redirect('/locations')
```

## Basic Error Messages

```python
{% if messages %}
<ul class="messages">
    {% for message in messages %}
        <li {% if message.tags %} class="{{ message.tags }}"{% endif %}>{{ message }}</li>
    {% endfor %}
</ul>
{% endif %}
```

## Email regex

```python
import re # the regex module
class LocationManager(models.Manager):
    def basic_validator(self, post_data):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(post_data['email']):    # test whether a field matches the pattern
            errors['email'] = "Invalid email address!"
        return errors
```
