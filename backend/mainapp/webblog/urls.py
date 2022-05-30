from django.urls import path
from webblog import views
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView

urlpatterns = [
    path('posts/', views.ListOfAllPosts.as_view()),
    path('post/<int:pk>/', views.PostDetails.as_view()),
    path('post/delete/<int:pk>', views.DeletePost.as_view()),
    path('post/create/', views.CreatePost.as_view()),
    path('post/update/<int:pk>', views.UpdatePost.as_view()),
    path('openapi/', get_schema_view(
        title="WebBlog",
        description="API for WebBlog project"
    ), name="openapi-schema"),
    path('docs/', TemplateView.as_view(
        template_name='./documentation.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger-ui')
]
