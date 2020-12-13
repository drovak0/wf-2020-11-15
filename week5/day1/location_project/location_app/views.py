from django.contrib import messages
from django.shortcuts import redirect, render

from .models import Location

# Create your views here.


def locations_new(request):
    return render(request, 'new_location.html')


def locations_create(request):
    print(request.POST)
    # before we create a new location, run validator
    errors = Location.objects.basic_validatorzzz(request.POST)
    # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/locations/new')
    else:
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
    # run the validator
    errors = Location.objects.basic_validatorzzz(request.POST)
    # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            print(key, value)
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect(f'/locations/{location_id}/edit')
    else:
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
