from django.shortcuts import render
from rest_framework import generics
from .serializers import PostSerializer
from .models import Post


class PostsList(generics.ListAPIView):
    # see all the posts
    queryset = Post.objects.all()
    serializer_class = PostSerializer