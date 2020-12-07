# 1-M

## Shirt Factory

- Designer -> Shirts
- select dropdown

```python
from django.db import models

class Designer(models.Model):
    name = models.CharField(max_length=45)
    # shirtz
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Shirt(models.Model):
    brand = models.CharField(max_length=45)
    size = models.charField(max_length=45)
    description = models.TextField()
    creator = models.ForeignKey(Designer, related_name='shirtz', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```
