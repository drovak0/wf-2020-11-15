from django.shortcuts import redirect, render

from .models import Dessert


# Create your views here.
def index(request):
    all_desserts = Dessert.objects.all()
    print(all_desserts)
    context = {
      'dessertz': all_desserts
    }
    return render(request, 'index.html', context)


def create_dessert(request):
    print('*'*20)
    print(request.POST)
    print(request.POST['form_name'])
    print(request.POST['form_description'])

    zname = request.POST['form_name']
    zdescription = request.POST['form_description']
    newly_created_dessert = Dessert.objects.create(
        name=zname,
        description=zdescription
    )
    print('Here is your new dessert!', newly_created_dessert)
    return redirect('/')
