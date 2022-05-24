from django.urls import include, path
from webblog import views


urlpatterns = [
    path('', views.PostsList.as_view())
]
