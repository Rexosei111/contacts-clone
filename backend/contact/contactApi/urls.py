from django.urls import path
from .views import (
    ContactListView, CreateContactView, 
    ContactDetailView, UserRegistrationView
) 
from rest_framework.authtoken import views as auth_views

app_name = "ContactApi"

urlpatterns = [
    path('contacts/', ContactListView, name="contacts"),
    path('contacts/create/', CreateContactView, name = "create"),
    path('contacts/<int:pk>/', ContactDetailView, name="detail"),
    path('register/', UserRegistrationView, name="register"),
    path('login/', auth_views.obtain_auth_token, name="login"),
]

