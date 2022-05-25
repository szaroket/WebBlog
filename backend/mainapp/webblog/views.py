from django.shortcuts import render
from rest_framework import generics
from .serializers import PostSerializer
from .models import Post


class GetListOfAllPosts(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


# Use RetrieveUpdateDestroyAPIView instead of RetrieveAPIView
# it will support now CRUD
class GetOnePost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
