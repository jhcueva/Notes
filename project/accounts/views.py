from rest_framework import status, viewsets, mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator


from accounts.serializers import (
    UsersModelSerializer,
    UserLoginSerializer,
    UserSignUpSerializer
)

class UsersViewSet(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    viewsets.GenericViewSet):
    """User view set

    Handle sign up, login
    """
    @method_decorator(csrf_protect, name='dispatch')
    @action(detail=False, methods=['post'])
    def login(self, request):
        """User login"""

        serializers = UserLoginSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        user = serializers.save()
        data = UsersModelSerializer(user).data
        
        return Response(data, status=status.HTTP_201_CREATED)
    
    @method_decorator(csrf_protect, name='dispatch')
    @action(detail=False, methods=['post'])
    def signup(self, request):
        """User sign up"""
        serializer = UserSignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UsersModelSerializer(user).data

        return Response(data, status=status.HTTP_201_CREATED)
        
    @method_decorator(ensure_csrf_cookie, name='dispatch')        
    @action(detail=False, methods=['get'])
    def csrf(self, request):
        return Response({ 'success': 'CSRF cookie set'})
