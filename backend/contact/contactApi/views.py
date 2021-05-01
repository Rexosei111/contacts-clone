from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializers import *
# Create your views here.


class ContactListView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class ContactDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
