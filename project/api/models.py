from django.db import models

# Create your models here.


class Note(models.Model):
    """Notes"""

    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        """Returns first 50 characters of note body"""
        return self.body[:50]