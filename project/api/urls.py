from django.db import router
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api import views

router = DefaultRouter()
router.register(r'api', views.NotesViewSet, basename='api')

urlpatterns = [
    path('', include(router.urls))
]
