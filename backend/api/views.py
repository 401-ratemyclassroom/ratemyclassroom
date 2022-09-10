from rest_framework import viewsets, status
from .serializers import ClassroomSerializer, ReviewSerializer
from .models import Classroom, Review
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

# Create your views here.
class ClassroomView(viewsets.ModelViewSet):
    serializer_class = ClassroomSerializer
    queryset = Classroom.objects.all()

class ReviewView(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    def retrieve(self, request, pk):
        
        classroom = Classroom.objects.filter(name=pk)
        if not classroom:
            return Response({"response": "Not Found"}, status=status.HTTP_404_NOT_FOUND)
        reviews = Review.objects.filter(classroom=classroom[0])
        serializer = ReviewSerializer(reviews)
        return Response(serializer.data, status=status.HTTP_200_OK)