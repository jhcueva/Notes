from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status, viewsets, mixins
from rest_framework.permissions import IsAuthenticated, AllowAny

from django.shortcuts import get_object_or_404

from .models import Note

from .serializers import (
    NoteSerializer,
    NoteCreateSerializer,
)


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
        if self.action in ['note']:
            permissions = [AllowAny]
        else:
            permissions = [IsAuthenticated]

        return [permission() for permission in permissions]

    @action(detail=False, methods=['post'])
    def newnote(self, request):
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

    @action(detail=True, methods=['get', 'put', 'delete'])
    def note(self, request, pk=None):

        if request.method == 'GET':
            note = get_object_or_404(Note, id=pk)
            serializer = NoteSerializer(note, many=False)
            data = serializer.data

            return Response(data, status=status.HTTP_200_OK)

        if request.method == 'PUT':
            data = request.data
            note = get_object_or_404(Note, id=pk)
            serializer = NoteSerializer(instance=note, data=data)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)

        if request.method == 'DELETE':
            note = get_object_or_404(Note, id=pk)
            note.delete()

            return Response('Note deleted', status=status.HTTP_200_OK)


# @api_view(['GET', 'POST'])
# def getNotes(request):

#     if request.method == 'GET':
#         return getNotesList(request)

#     if request.method == 'POST':
#         return createNote(request)


# @api_view(['GET', 'PUT', 'DELETE'])
# def getNote(request, pk):

#     if request.method == 'GET':
#         return getNoteDetail(request, pk)

#     if request.method == 'PUT':
#         return updateNote(request, pk)

#     if request.method == 'DELETE':
#         return deleteNote(request, pk)
