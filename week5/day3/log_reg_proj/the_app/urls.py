from django.urls import path

from . import views

urlpatterns = [
    # Templates
    path('', views.index),
    path('games', views.show_games),
    # Redirects
    path('register', views.register_user),
    path('login', views.login_user),
    path('logout', views.logout_user),
    path('games/create', views.create_game),
    path('games/<int:game_id>/mark_for_sale', views.mark_game_for_sale),
    path('games/<int:game_id>/favorite', views.mark_game_as_favorite),
    path('games/<int:game_id>/unfavorite', views.mark_game_as_unfavorite),
]
