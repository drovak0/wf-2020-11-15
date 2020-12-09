from django.shortcuts import redirect, render

from .models import *

# Create your views here.

# Render views
def index(request):

    context = {
        'all_heroes': Hero.objects.all(),
    }
    return render(request, 'index.html', context)


def all_powers(request):
    context = {
        'all_powers': Power.objects.all(),
    }
    return render(request, 'powers.html', context)


def show_hero(request, heroo_id):
    context = {
        'hero_to_display': Hero.objects.get(id=heroo_id),
        'all_powers': Power.objects.all()
    }
    return render(request, 'hero.html', context)


def show_power(request, power_id):
    context = {
        'power_to_display': Power.objects.get(id=power_id),
        'all_heroes': Hero.objects.all()
    }
    return render(request, 'power.html', context)


# Redirect
def add_power(request):
    print(request.POST)

    Power.objects.create(
        name=request.POST['name'],
        description=request.POST['description'],
        image=request.POST['image']
    )

    return redirect('/powers')


def add_hero(request):
    print(request.POST)

    Hero.objects.create(
        name=request.POST['name'],
        description=request.POST['description'],
        image=request.POST['image']
    )

    return redirect('/')


def add_power_to_hero(request):
    print(request.POST)
    # 1 get the one instance
    power = Power.objects.get(id=request.POST['power_id'])
    # 2 get the second instance
    hero = Hero.objects.get(id=request.POST['hero_id'])
    # 3 add one to the other

    # only need 1 of theses
    # power.heroes.add(hero)
    hero.powers.add(power)
    return redirect(f"/heroes/{request.POST['hero_id']}")
