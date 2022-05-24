# A model is a Python class that subclasses django.db.models.Model,
# in which each attribute represents a database field.

from django.db import models


class Post(models.Model):
    # Define attributes for blog posts
    post_title = models.CharField(max_length=200)
    post_author = models.CharField(max_length=20)
    post_content = models.TextField()

    def __str__(self):
        return self.post_title
