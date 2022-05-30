# A model is a Python class that subclasses django.db.models.Model,
# in which each attribute represents a database field.

from django.db import models


class Post(models.Model):
    # Define attributes for blog posts
    # SlugField - used for generating valid URL using obtained data
    post_slug = models.SlugField(max_length=100, unique=True)
    post_title = models.CharField(max_length=200, unique=True)
    post_author = models.CharField(max_length=20)
    post_content = models.TextField()
    # Date is set to "now" when object is first created
    post_publish_date = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return self.post_title

    class Meta:
        ordering = ['-post_publish_date']
