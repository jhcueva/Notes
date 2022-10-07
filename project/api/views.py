from django.http import response
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Note
from .serializers import (
    NoteSerializer,
    NoteCreateSerializer,
    )
from api import serializers
from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote
# Create your views here.

from rest_framework import status, viewsets, mixins
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action




@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


# /notes GET
# /notes POST
# /notes/<id> GET
# /notes/<id> PUT
# /notes/<id> DELETE

class NotesViewSet(mixins.CreateModelMixin,
                    mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.ListModelMixin,
                    viewsets.GenericViewSet):
    """Notes ViewSet
    
    Handle createNote, getNotes, 
    """
    serializer_class = NoteSerializer
    
    def get_permissions(self):
        """Assign permissions"""

        # permissions = [IsAuthenticated]
        if self.action in []:
            permissions = [AllowAny]
        else:
            permissions = [IsAuthenticated]
        
        return [permission() for permission in permissions]
    
    @action(detail=False, methods=['post'])
    def createNote(self, request):
        """Create note"""

        serializers = NoteCreateSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        note = serializers.save()
        data = NoteSerializer(note).data

        return Response(data, status=status.HTTP_201_CREATED)
    
    @action(detail=False, methods=['get'])
    def notes(self, request):
        """Get notes"""
        
        notes = Note.objects.all().order_by('-updated')
        serializer = NoteSerializer(notes, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    

@api_view(['GET', 'POST'])
def getNotes(request):

    if request.method == 'GET':
        return getNotesList(request)

    if request.method == 'POST':
        return createNote(request)


@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):

    if request.method == 'GET':
        return getNoteDetail(request, pk)

    if request.method == 'PUT':
        return updateNote(request, pk)

    if request.method == 'DELETE':
        return deleteNote(request, pk)
