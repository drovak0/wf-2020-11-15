from django.shortcuts import redirect, render

from .models import Location

# Create your views here.


def locations_new(request):
    return render(request, 'new_location.html')


def locations_create(request):
    print(request.POST)
    newly_created_location = Location.objects.create(
        name=request.POST['name'],
        country=request.POST['country'],
        city=request.POST['city'],
        image=request.POST['image']
    )
    # return redirect('/locations/' + str(newly_created_location.id))
    return redirect(f'/locations/{newly_created_location.id}')


def locations_show_single(request, location_id):
    context = {
        'location': Location.objects.get(id=location_id)
    }
    return render(request, 'location_single.html', context)


def locations_show(request):
    context = {
        'all_locations': Location.objects.all()
    }
    return render(request, 'locations_all.html', context)


def locations_edit(request, location_id):
    context = {
        'location': Location.objects.get(id=location_id)
    }
    return render(request, 'location_edit.html', context)


def locations_update(request, location_id):
    print(request.POST)
    location_to_update = Location.objects.get(id=location_id)
    location_to_update.name = request.POST['name']
    location_to_update.country = request.POST['country']
    location_to_update.city = request.POST['city']
    location_to_update.image = request.POST['image']
    location_to_update.save()
    return redirect(f'/locations/{location_id}')


def locations_destroy(request, location_id):
    Location.objects.get(id=location_id).delete()
    return redirect('/locations')
