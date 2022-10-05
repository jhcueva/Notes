from email.policy import default
from enum import unique
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    """User model

    Extend from Django Abstract User change the username 
    to email and add some extra fields
    """

    email = models.EmailField(
        'email address',
        unique=True,
        error_messages={
            'unique': 'Email already taken'
        }
    )
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    is_verified = models.BooleanField(
        'verified',
        default=False,
        help_text=(
            'Set to true when the user verifies the email'
        )
    )
    
    def __str__(self):
        """Return the username"""
        return self.username
    
    def get_short_name(self):
        """Return username"""
        return self.username