import bcrypt
from django.contrib import messages
from django.shortcuts import redirect, render

from .models import Game, User

# from .models import *


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
        password = request.POST['password']
        hash_browns = bcrypt.hashpw(
            password.encode(),  # pw to hash
            bcrypt.gensalt()  # generated salt bae
        ).decode()  # create the hash
        print(hash_browns)
        created_user = User.objects.create(
            username=request.POST['username'],
            hashed_password=hash_browns,
            first_name=request.POST['first_name'],
            dob=request.POST['dob']
        )
        request.session['uuid'] = created_user.id

        return redirect('/games')


def show_games(request):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        'user_logged_in': User.objects.get(id=request.session['uuid']),
        'all_games_on_sale': Game.objects.filter(on_sale=True),
        'all_games_not_on_sale': Game.objects.filter(on_sale=False),
    }
    return render(request, 'games.html', context)


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
        return redirect('/games')


def create_game(request):
    # TODO add validation
    logged_in_user = User.objects.get(id=request.session['uuid'])
    Game.objects.create(
        name=request.POST['name'],
        uploaded_by=logged_in_user
    )
    print('Created a game!')
    return redirect('/games')


def mark_game_for_sale(request, game_id):
    # update
    game = Game.objects.get(id=game_id)
    game.on_sale = True
    game.save()
    return redirect('/games')


def mark_game_as_favorite(request, game_id):
    # get game
    game = Game.objects.get(id=game_id)
    # get user
    user = User.objects.get(id=request.session['uuid'])
    # add
    user.favorites.add(game)
    return redirect('/games')


def mark_game_as_unfavorite(request, game_id):
    # get game
    game = Game.objects.get(id=game_id)
    # get user
    user = User.objects.get(id=request.session['uuid'])
    # add
    user.favorites.remove(game)
    return redirect('/games')
