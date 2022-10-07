# Django REST Framework
from dataclasses import field
from rest_framework import serializers

# Model 
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    """Note serializer"""

    # id = serializers.IntegerField()
    body = serializers.CharField(min_length=2, max_length=None, allow_blank=False)

    class Meta:
        model = Note
        fields = '__all__'
        

class NoteCreateSerializer(serializers.Serializer):
    """Create Note serializer
    
    Handle the body note validation
    """
    
    body = serializers.CharField(min_length=2, max_length=None, allow_blank=False)
    
    def create(self, data):
        """Handle note creation"""

        note = Note.objects.create(body=data['body'])

        return note