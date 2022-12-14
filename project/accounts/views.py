from rest_framework import status, viewsets, mixins
from rest_framework import generics
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView

from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator

from accounts.models import User

# Permissions
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)

#Serializers
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
    
    queryset = User.objects.all()
    serializer_class = UsersModelSerializer
    lookup_field = 'email'
    
    def get_permissions(self):
        """Assign permissions based on actions"""

        if self.action in ['signup', 'login', 'csrf']:
            permissions = [AllowAny]
        else:
            permissions = [IsAuthenticated]
        
        return [permission() for permission in permissions]
    
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

    # @action(detail=False, methods=['post'])
    # def blacklistjwt(self, request):
    #     try:
    #         token = RefreshToken(request.data['refresh_token'])
    #         token.blacklist()
    #         return Response ("Success", status=status.HTTP_200_OK)
    #     except Exception as e:
    #         return Response(status=status.HTTP_400_BAD_REQUEST)
        
    
    def retrieve(self, request, *args, **kwargs):
        user = request.user
        user = UsersModelSerializer(user)
        
        return Response(user.data, status=status.HTTP_200_OK)
        
    @method_decorator(ensure_csrf_cookie, name='dispatch')        
    @action(detail=False, methods=['get'])
    def csrf(self, request):
        return Response({ 'success': 'CSRF cookie set'})
    
# class BlacklistRefreshView(APIView):
#     def post(self, request):
#         token = RefreshToken(request.data.get('refresh'))
#         token.blacklist()
#         return Response("Success")
