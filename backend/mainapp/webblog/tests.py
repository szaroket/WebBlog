from unittest import mock
from django.test import TestCase
from webblog.models import Post
from datetime import datetime


def create_model():
    post_example = Post.objects.create(
        post_slug="fist post",
        post_title="First post",
        post_author="Jan Kowalski",
        post_content="Very important text in my first post"
    )
    return post_example


class TestPostModel(TestCase):
    def test_if_post_has_title(self):
        post = create_model()
        self.assertEqual(post.post_title, "First post")

    # to fix: problem with mock time
    def test_if_publish_date_is_set(self):
        post = create_model()
        mock_date = datetime(2022, 5, 25, 19, 10, 11, 703055)
        with mock.patch('django.utils.timezone.now') as mock_now:
            mock_now.return_value = mock_date
        self.assertEqual(post.post_publish_date, mock_date)

    def test_if_author_exists(self):
        post = create_model()
        self.assertEqual(post.post_author, "Jan Kowalski")
