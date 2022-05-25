from django.urls import include, path
from webblog import views


urlpatterns = [
    path('posts/', views.GetListOfAllPosts.as_view()),
    path('posts/<int:pk>/', views.GetOnePost.as_view())
]
