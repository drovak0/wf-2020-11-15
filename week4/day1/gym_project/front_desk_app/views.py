from django.shortcuts import redirect, render


# Create your views here.
def index(request):
    return render(request, 'index.html')


def register(request):
    # register logic
    print('Registering a user!')
    print(request.POST)

    # save the username to session
    request.session['username_in_session'] = request.POST['username']
    return redirect('/dashboard')


def dashboard(request):
    #  check if we have a session
    if 'username_in_session' not in request.session:
        return redirect('/')
    return render(request, 'dashboard.html')

def logout(request):
    del request.session['username_in_session']
    print('Deleting session!')
    return redirect('/')
