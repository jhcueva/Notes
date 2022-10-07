from dataclasses import field
from wsgiref.validate import validator
from xml.dom import UserDataHandler
import django
from django.conf import settings
from django.contrib.auth import password_validation, authenticate
from django.core.mail import EmailMultiAlternatives
from django.core.validators import RegexValidator

from accounts.models import User

# Django REST Framework
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator

class UsersModelSerializer(serializers.ModelSerializer):
    """User model serializer"""

    class Meta:
        """Meta class"""

        model = User
        fields = ('email',)
        

class UserLoginSerializer(serializers.Serializer):
    """User Login serializer
    
    Handle the login request data
    """
    
    email = serializers.EmailField()
    password = serializers.CharField(min_length=8, max_length=40)

    def validate(self, data):
        """Check credential"""

        user = authenticate(username=data['email'], password=data['password'])

        if not user:
            raise serializers.ValidationError("Invalid email or password")
        self.context['user'] = user
        
        return data
    
    def create(self, data):
        user = User.objects.get(email=data['email'])
        return user
    
class UserSignUpSerializer(serializers.Serializer):
    """User sign up serializer
    
    Handle sign up data validation
    """
    
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    
    # username = serializers.CharField(
    #     min_length=4,
    #     max_length=20,
    #     validators=[UniqueValidator(queryset=User.objects.all())]
    # )
    
    #Password
    password = serializers.CharField(min_length=8, max_length=40)    
    password_confirmation = serializers.CharField(min_length=8, max_length=40)

    #Name
    # first_name = serializers.CharField(min_length=2, max_length=30)
    # last_name = serializers.CharField(min_length=2, max_length=30)
    
    def validate(self, data):
        """Verify passwords match"""
        password = data['password']
        password_confirmation = data['password_confirmation']
        if password != password_confirmation:
            raise serializers.ValidationError("Passwords don't match")
        password_validation.validate_password(password)    
        return data
    
    def create(self, data):
        """Handle user creation"""
        data.pop('password_confirmation')
        user = User.objects.create_user(**data)
        return user
        