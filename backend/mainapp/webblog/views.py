from django.shortcuts import render
from rest_framework import generics
from .serializers import PostSerializer
from .models import Post


class GetListOfAllPosts(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class GetOnePost(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
