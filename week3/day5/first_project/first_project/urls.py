from django.urls import include, path  # import include

# from django.contrib import admin              # comment out, or just delete

urlpatterns = [
    path('', include('first_app.urls')),
    # path('admin/', admin.sites.urls)         # comment out, or just delete
]
