from django.db import models


# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=255)
    hashed_password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
