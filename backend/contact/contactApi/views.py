from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .models import *
from .serializers import *

# Create your views here.

@api_view(["GET",])
@permission_classes([IsAuthenticated,])
def ContactListView(request):
    user_contacts = Contact.objects.filter(user=request.user)
    serializer = ContactSerializer(user_contacts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
@permission_classes([IsAuthenticated,])
def CreateContactView(request):
    user = request.user
    serializer = ContactSerializer(request.data, data=user)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def ContactDetailView(request, pk):
    user = request.user.id
    contact = Contact.objects.get(pk=pk)
    serializer = ContactSerializer(contact)
    if contact.user == user:
        return Response(serializer.data, status=status.HTTP_200_OK)
    return  Response({"message": "Contact is not in you contact list"}, status=status.HTTP_404_NOT_FOUND)

@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def ContactDeleteView(request, pk):
    user = request.user.id
    contact = Contact.objects.get(pk=pk)
    if contact.user == user:
        contact.delete()
        return Response({"message": "Contact Deleted Succesfully"}, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_401_UNAUTHORIZED)

@api_view(["POST"])
def UserRegistrationView(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token = Token.objects.get_or_create(user=user)
        data = {
            "username" : user.username,
            "email" : user.email,
        }
        return Response(data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors)
           
