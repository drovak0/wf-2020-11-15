from django.shortcuts import redirect, render

from .models import Designer, Shirt

# from .models import *

# Create your views here.

def index(request):
    context = {
      'all_designers': Designer.objects.all(),
      # 'all_shirts': Shirt.objects.all()
    }
    return render(request, 'index.html', context)

def create_designer(request):
    print(request.POST)
    # do db stuff
    Designer.objects.create(name=request.POST['name'])
    print('Created a designer!')
    return redirect('/')


def create_shirt(request):
    print(request.POST)
    # do db stuff
    designer = Designer.objects.get(id=request.POST['designer'])
    Shirt.objects.create(
      brand = request.POST['brand'],
      size = request.POST['size'],
      description = request.POST['description'],
      creator = designer
    )
    print('Created a shirt!')
    return redirect('/')
