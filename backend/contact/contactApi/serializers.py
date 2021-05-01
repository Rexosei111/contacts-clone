from rest_framework import serializers
from .models import *


class PhoneNumberSerializer(serializers.ModelSerializer):

	class Meta:
		model = PhoneNumber
		fields = (
			'__all__'
		)

class ContactSerializer(serializers.ModelSerializer):
 	phoneNumber = PhoneNumberSerializer(many=True, read_only=True)

 	class Meta:
 		model = Contact
 		fields = [
			 'id','user','first_name', 
			 'last_name', 'email','image', 'date_of_birth', 
			 'job','phoneNumber', 'favorite'
		]

 		 