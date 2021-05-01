from django.urls import path
from .views import ContactListView, ContactDetailView
app_name = "ContactApi"

urlpatterns = [
    path('contacts/', ContactListView.as_view(), name="contacts"),
    path('contacts/<int:pk>/', ContactDetailView.as_view(), name="detail")
]