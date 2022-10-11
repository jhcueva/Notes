from django.db import router
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from accounts import views

router = DefaultRouter()
router.register(r'accounts', views.UsersViewSet, basename='accounts')

urlpatterns = [
    path('', include(router.urls)),
]
