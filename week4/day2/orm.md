# ORM

## Models

### Desserts

Chris’s Hellowaa, Ma sha alah

What fields should we have for a dessert?

```python
from django.db import models

class Dessert(models.Model):
    name = models.CharField(max_length=45)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

## CRUD

### Create

```python
Dessert.objects.create(name='',description="")
Dessert.objects.create(
  name='Cookies and Cream Icecream',
  description="It's yummy!"
)
Dessert.objects.create(name='Chocolate cake', description="Crisp and soft")
Dessert.objects.create(name='chocolate cake',description="yummy yummy!")
Dessert.objects.create(name='Crème brûlée',description="Rich and delicious")
Dessert.objects.create(name='pistachio cake', description="Soft filled with cream")
Dessert.objects.create(name='cookies',description="cookies with chocolate chips")
Dessert.objects.create(name='basbusa',description="the best dessert")
Dessert.objects.create(name='donut',description=" yummmm(:")
Dessert.objects.create(name='An-Nafud desert',description=" in the north of Saudi Arabia")
```

### Read

```python
Dessert.objects.all()
```

### Update

```python
# Dessert.obbjects.get(name='Cookies and Cream Icecream')
dessert_to_update = Dessert.objects.get(id=1)
dessert_to_update.description = 'something else'
dessert_to_update.save()
```

### Delete

```python
to_delete = Dessert.objects.get(id=1)
to_delete.delete()
```

## Topics

- restful routing
- HTTP methods

