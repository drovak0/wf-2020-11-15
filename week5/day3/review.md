# Review - Favorite Game Store

- [x] add one to many relationship
- [x] use boolean field
- [x] only user who uploaded can mark for sale
- [x] add many to many relationship (like or favorite)
- [x] display liked by list/count

Low Priority

- [ ] make favorite a toggle
- [ ] comment feature

```python
class User(models.Model):
    first_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    dob = models.DateField()
    hashed_password = models.CharField(max_length=255)
    # games_uploaded
    # favorites
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Game(models.Model):
    name = models.CharField(max_length=255)
    uploaded_by = models.ForeignKey(User, related_name='games_uploaded', on_delete = models.CASCADE)
    favorited_by = models.ManyToMany(User, related_name='favorites')
    # is_on_sale
    on_sale = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # ninja bonus
    # could by many to many if we needed to query
    # platform = models.CharField(max_length=255)
    # genre = models.CharField(max_length=255)
```
