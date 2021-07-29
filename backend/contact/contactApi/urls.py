from django.urls import path
from .views import (
    ContactListView, CreateContactView, 
    ContactDetailView, UserRegistrationView,
    ContactUpdateView, ContactDeleteView, GetUserToken, FavoriteContact, DetailContactView
) 
from rest_framework.authtoken import views as auth_views

app_name = "ContactApi"

urlpatterns = [
    path('contacts/', ContactListView.as_view(), name="contacts"),
    path('contacts/create/', CreateContactView, name = "create"),
    path('contacts/<int:pk>/', DetailContactView.as_view(), name="detail"),
    path('contacts/<int:pk>/update/', ContactUpdateView, name="update"),
    path('contacts/<int:pk>/delete/', ContactDeleteView, name="delete"),
    path('contacts/<int:pk>/fav/', FavoriteContact, name="favorite"),
    path('register/', UserRegistrationView, name="register"),
    path('login/', GetUserToken.as_view(), name="login"),
    # path('log/', Auth, name='log')
]

