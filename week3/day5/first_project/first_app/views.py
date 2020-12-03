from django.shortcuts import HttpResponse, redirect, render


# Render
def index(request):
    # return HttpResponse("this is the equivalent of @app.route('/')!")
    print('Inside views.index!')
    return render(request, 'index.html')

def show_dashboard(request):
    return render(request, 'dashboard.html')

# Redirect
def login(request):
    print('Redirecting to dashboard!')
    print('Logging a user in!')
    # check some logic
    # do some db stuff
    # magic
    return redirect('/dashboard')


def another_method(request, name_i_choose):
    print('name_i_choose: ', name_i_choose)
    # do some db stuff
    return redirect('/dashboard')
