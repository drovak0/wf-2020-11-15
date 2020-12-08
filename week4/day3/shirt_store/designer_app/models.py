# Create your models here.
from django.db import models


class Designer(models.Model):
    name = models.CharField(max_length=45)
    # shirtz
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Name: {self.name}'


class Shirt(models.Model):
    brand = models.CharField(max_length=45)
    size = models.CharField(max_length=45)
    description = models.TextField()
    creator = models.ForeignKey(
        Designer, related_name='shirtz', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Brand: {self.brand}'


# How to create a shirt
# grogu = Designer.objects.get(id=1)
# Shirt.objects.create(
#   brand = 'Puma',
#   size = 's',
#   description = 'Sport',
#   creator = grogu,
# )
