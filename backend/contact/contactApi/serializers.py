from rest_framework import serializers
from phonenumber_field.serializerfields import PhoneNumberField
from drf_writable_nested.serializers import WritableNestedModelSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from .models import *


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = [
            'id', 'first_name',
            'last_name', 'email', 'image', 'date_of_birth',
            'job', 'phone', 'favorite'
        ]


class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input-type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def save(self):
        user = User(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        password1 = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password2 != password1:
            raise serializers.ValidationError(
                {"Error": "Passwords Do Not Much"}, status=status.HTTP_400_BAD_REQUEST)
        user.set_password(password1)
        user.save()
        return user
