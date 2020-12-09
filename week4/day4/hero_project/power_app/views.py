from django.shortcuts import redirect, render

from .models import *

# Create your views here.


def index(request):

    context = {
      'all_heroes': Hero.objects.all(),
      'all_powers': Power.objects.all(),
    }
    return render(request, 'index.html', context)


def add_power_to_hero(request):
    print(request.POST)
    # 1 get the one instance
    power = Power.objects.get(id=request.POST['power'])
    # 2 get the second instance
    hero = Hero.objects.get(id=request.POST['hero'])
    # 3 add one to the other

    # only need 1 of theses
    # power.heroes.add(hero)
    hero.powers.add(power)
    return redirect('/')
