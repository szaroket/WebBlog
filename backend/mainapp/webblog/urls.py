from django.urls import include, path
from webblog import views


urlpatterns = [
    path('posts/', views.ListOfAllPosts.as_view()),
    path('post/<int:pk>/', views.PostDetails.as_view()),
    path('post/delete/<int:pk>', views.DeletePost.as_view()),
    path('post/create/', views.CreatePost.as_view()),
    path('post/update/<int:pk>', views.UpdatePost.as_view())
]
