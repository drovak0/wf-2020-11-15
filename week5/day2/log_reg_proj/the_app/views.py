import bcrypt
from django.contrib import messages
from django.shortcuts import redirect, render

from .models import User


# Create your views here.
def index(request):
    return render(request, 'index.html')


def register_user(request):
    print(request.POST)
    errors = User.objects.register_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
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
          hashed_password=hash_browns,
          first_name=request.POST['first_name']
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
    errors = User.objects.login_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
      user = User.objects.get(username=request.POST['username'])
      request.session['uuid'] = user.id
      return redirect('/dashboard')
