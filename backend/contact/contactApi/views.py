from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from rest_framework import generics, filters
from .models import *
from .serializers import *

# Create your views here.


class ContactListView(generics.ListAPIView):
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['first_name', 'last_name', 'email', 'phone']

    def get_queryset(self):
        # queryset = super(ContactListView, self).get_queryset()
        user = self.request.user
        queryset = Contact.objects.filter(user=user)
        return queryset


@api_view(["POST"])
@permission_classes([IsAuthenticated, ])
@parser_classes([MultiPartParser, FormParser])
def CreateContactView(request):
    user = request.user
    contact = Contact(user=user)
    serializer = ContactSerializer(contact, data=request.data)
    if serializer.is_valid():
        contact = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def ContactDetailView(request, pk):
    user = request.user
    try:
        contact = Contact.objects.get(pk=pk)
    except Contact.DoesNotExist:
        return Response({"message": "Contact Not Found"}, status=status.HTTP_404_NOT_FOUND)
    if contact.user == user:
        serializer = ContactSerializer(contact)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response({"message": "Contact is not in you contact list"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def ContactDeleteView(request, pk):
    try:
        contact = Contact.objects.get(pk=pk)
    except Contact.DoesNotExist:
        return Response({"error": "Contact Not Found"}, status=status.HTTP_404_NOT_FOUND)

    if contact.user == request.user:
        contact.delete()
        return Response({"success": "Contact Deleted Succesfully"}, status=status.HTTP_200_OK)
    return Response({"error": "You are Unathorized to delete this contact"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def FavoriteContact(request, pk):
    user = request.user
    try:
        contact = Contact.objects.get(pk=pk)
    except Contact.DoesNotExist:
        return Response({"message": "Contact Not Found"}, status=status.HTTP_404_NOT_FOUND)

    print(contact.favorite)
    if contact.favorite:
        contact.favorite = False
        contact.save()
    else:
        contact.favorite = True
        contact.save()
        return Response({"success": "Update Successful"}, status=status.HTTP_200_OK)
    return Response({"error": "Update Unsuccesful"})

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
# @parser_classes([MultiPartParser, FormParser])
def ContactUpdateView(request, pk):
    try:
        contact = Contact.objects.get(pk=pk)
    except Contact.DoesNotExist:
        return Response({"message": "Contact Not Found"}, status=status.HTTP_404_NOT_FOU)

    if contact.user != request.user:
        return Response({"message": "You are not Authorized to Update this Contact"}, status=status.HTTP_401_UNAUTHORIZED)

    serializer = ContactSerializer(contact, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def UserRegistrationView(request):

    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token = Token.objects.get_or_create(user=user)
        data = {
            "username": user.username,
            "email": user.email,
        }
        return Response(data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetUserToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response(
            {
                "username": user.username,
                "email": user.email,
                "token": token.key
            }
        )
