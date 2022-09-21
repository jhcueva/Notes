# Django REST Framework
from dataclasses import field
from rest_framework import serializers

# Model 
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    """Note serializer"""

    class Meta:
        model = Note
        fields = '__all__'