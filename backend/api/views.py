from rest_framework import viewsets, status
from .serializers import ClassroomSerializer, ReviewSerializer
from .models import Classroom, Review
from django.shortcuts import get_object_or_404
from rest_framework.response import Response


# Create your views here.
class ClassroomView(viewsets.ModelViewSet):
    serializer_class = ClassroomSerializer
    queryset = Classroom.objects.all()

    def retrieve(self, request, pk):
        classrooms = Classroom.objects.filter(name__icontains=pk)
        if not classrooms:
            return Response({"response": "Not Found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = ClassroomSerializer(classrooms, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ReviewView(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    def retrieve(self, request, pk):  
        classroom = Classroom.objects.filter(name=pk)
        if not classroom:
            return Response({"response": "Not Found"}, status=status.HTTP_404_NOT_FOUND)
        reviews = Review.objects.filter(classroom=classroom[0])
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        print(request.data)
        classroom_name = request.data["classroom"]
        classroom = Classroom.objects.filter(name=classroom_name)
        if not classroom:
            return Response({"response": "Not Found"}, status=status.HTTP_404_NOT_FOUND)
        request.data["classroom"] = classroom[0].pk
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
