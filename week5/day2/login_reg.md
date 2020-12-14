# Registration/Login

- [x] create login/registration view
- [x] create dashboard view
- [x] install bcrypt
- [x] set up registration
- [x] hash passwords
- [x] set up login

- [x] make key error from html
- [x] add validation register
- [x] confirm password
- [x] add new field (first_name)

Bonus

- [x] username must be unique
- [x] birthday ? 🤔 must be a certain age

## bcrypt

```python
pip install bcrypt
```

### Using bcrypt

```python
import bcrypt
hash1 = bcrypt.hashpw('test'.encode(), bcrypt.gensalt()).decode()

bcrypt.checkpw('test'.encode(), hash1.encode())
```

## Register

```python
def register():
    # include some logic to validate user input before adding them to the database!
    password = request.POST['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()  # create the hash
    print(pw_hash)      # prints something like b'$2b$12$sqjyok5RQccl9S6eFLhEPuaRaJCcH3Esl2RWLm/cimMIEnhnLb7iC'
    # be sure you set up your database so it can store password hashes this long (60 characters)
    # make sure you put the hashed password in the database, not the one from the form!
    User.objects.create(username=request.POST['username'], password=pw_hash)
    return redirect("/") # never render on a post, always redirect!
```

## Login

```python
def login():
    # see if the username provided exists in the database
    user = User.objects.filter(username=request.POST['username']) # why are we using filter here instead of get?
    if user: # note that we take advantage of truthiness here: an empty list will return false
        logged_user = user[0]
        # assuming we only have one user with this username, the user would be first in the list we get back
        # of course, we should have some logic to prevent duplicates of usernames when we create users
        # use bcrypt's check_password_hash method, passing the hash from our database and the password from the form
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            # if we get True after checking the password, we may put the user id in sessioncopy
            request.session['userid'] = logged_user.id
            # never render on a post, always redirect!
            return redirect('/success')
    # if we didn't find anything in the database by searching by username or if the passwords don't match,
    # redirect back to a safe route
    return redirect("/")
```
