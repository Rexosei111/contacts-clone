from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from .models import *


class PhoneNumberSerializer(serializers.ModelSerializer):

	class Meta:
		model = PhoneNumber
		fields = ('__all__')

class ContactSerializer(serializers.ModelSerializer):
 	phoneNumber = PhoneNumberSerializer(many=True, read_only=True)

 	class Meta:
 		model = Contact
 		fields = [
			 'id','user','first_name', 
			 'last_name', 'email','image', 'date_of_birth', 
			 'job','phoneNumber', 'favorite'
		]

 		 
class UserSerializer(serializers.ModelSerializer):
	password2 = serializers.CharField(style={"input-type": "password"}, write_only=True)

	class Meta:
		model = User
		fields = '__all__'
		extra_kwargs = {
			"password": {"write_only": True}
		}
	
	def save(self):
		user = User(
			username = self.validated_data['username'],
			email = self.validated_data['email']
		)
		password1 = self.validated_data['password']
		password2 = self.validated_data['password2']

		if password2 != password1:
			user.delete()
			raise serializers.ValidationError({"Error": "Passwords Do Not Much"})
		user.set_password(password1)
		user.save()
		return user