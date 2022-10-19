from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager

# Create your models here.


# class CustomUserManager(UserManager):
#     """Custom user manager"""

#     def create_user(self, email, password=None):
#         """
#         Creates and saves a User with the given email, date of
#         birth and password.
#         """
#         if not email:
#             raise ValueError('Users must have an email address')

#         user = self.model(
#             email=self.normalize_email(email),
#         )

#         user.set_password(password)
#         user.save(using=self._db)
#         return user


class User(AbstractUser):
    """User model

    Extend from Django Abstract User change, the username field
    to email
    """

    email = models.EmailField(
        'email address',
        unique=True,
        error_messages={
            'unique': 'Email already taken'
        }
    )

    # username = None

    # objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        """Return the username"""
        return self.username

    def get_short_name(self):
        """Return username"""
        return self.username
