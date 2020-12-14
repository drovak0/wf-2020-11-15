from datetime import datetime, timedelta

import bcrypt
from django.db import models

# import datetime
# datetime.datetime

class UserManager(models.Manager):
    def login_validator(self, post_data):
        errors = {}
        # check username in db
        user_list = User.objects.filter(username=post_data['username'])
        if len(user_list) == 0:
          # errors['username'] = 'Username not found'
          errors['username'] = 'There was a problem'

        # check password

        elif not bcrypt.checkpw(
            post_data['password'].encode(),  # from the form
            user_list[0].hashed_password.encode()  # from the db
        ):
          # errors['password'] = 'Password did not match'
          errors['password'] = 'There was a problem'
        return errors

    def register_validator(self, post_data):
        errors = {}
        # check username
        if len(post_data['username']) < 8:
          errors['username'] = 'Username must be longer than 8 characters'
        # check password
        if len(post_data['password']) < 8:
          errors['password'] = 'Password must be longer than 8 characters'
        if len(post_data['first_name']) < 8:
          errors['first_name'] = 'First name must be longer than 8 characters'

        if post_data['password'] != post_data['confirm_password']:
          errors['confirm_password'] = 'Password does not match'

        if len(User.objects.filter(username=post_data['username'])) > 0:
          errors['username'] = 'Username taken'

        print('*'*100)
        # user should be at least 18
        eighteen_years_delta = timedelta(days=365*18)
        print('eighteen_years_delta:', eighteen_years_delta)
        # convert post_data to date object
        dob = datetime.strptime(post_data['dob'], '%Y-%m-%d')
        print('dob:', dob)
        if dob > (datetime.today() - eighteen_years_delta):
            errors['dob'] = 'Must be 18 years old to drive!'


        return errors

class User(models.Model):
    username = models.CharField(max_length=255)
    hashed_password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    dob = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
