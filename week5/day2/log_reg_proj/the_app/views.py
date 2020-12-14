import bcrypt
from django.shortcuts import redirect, render

from .models import User


# Create your views here.
def index(request):
    return render(request, 'index.html')


def register_user(request):
    print(request.POST)

    # TODO
    # add validations
    # generate error messages


    # include some logic to validate user input before adding them to the database!
    password = request.POST['password']
    hash_browns = bcrypt.hashpw(
        password.encode(), # pw to hash
        bcrypt.gensalt() # generated salt bae
    ).decode()  # create the hash
    # prints something like b'$2b$12$sqjyok5RQccl9S6eFLhEPuaRaJCcH3Esl2RWLm/cimMIEnhnLb7iC'
    print(hash_browns)
    # be sure you set up your database so it can store password hashes this long (60 characters)
    # make sure you put the hashed password in the database, not the one from the form!
    created_user = User.objects.create(
        username=request.POST['username'],
        hashed_password=hash_browns
    )
    # set up session
    request.session['uuid'] = created_user.id

    return redirect('/dashboard')
    # return redirect("/")  # never render on a post, always redirect!


def show_dashboard(request):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        'user_logged_in': User.objects.get(id=request.session['uuid'])
    }
    return render(request, 'dashboard.html', context)


def logout_user(request):
    del request.session['uuid']
    # request.session.flush()
    return redirect('/')


def login_user(request):
    # TODO
    # add validations
    # refactor this into the UserManager
    # generate error messages

    # see if the username provided exists in the database
    # why are we using filter here instead of get?
    user_list = User.objects.filter(username=request.POST['username'])
    if len(user_list) == 1:  # note that we take advantage of truthiness here: an empty list will return false
        logged_user = user_list[0]
        # assuming we only have one user with this username, the user would be first in the list we get back
        # of course, we should have some logic to prevent duplicates of usernames when we create users
        # use bcrypt's check_password_hash method, passing the hash from our database and the password from the form
        if bcrypt.checkpw(
          request.POST['password'].encode(), # from the form
          logged_user.hashed_password.encode()  # from the db
        ):
            print('Username and password matched!')
            # if we get True after checking the password, we may put the user id in sessioncopy
            request.session['uuid'] = logged_user.id
            # never render on a post, always redirect!
            return redirect('/dashboard')
    # if we didn't find anything in the database by searching by username or if the passwords don't match,
    # redirect back to a safe route
    return redirect("/")
