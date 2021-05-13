from django.contrib import admin
from .models import *
# Register your models here.

class ContactAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            'fields': (
                'user', 'first_name', 'last_name', 'image',
            )
        }),
        ('More Info', {
            'fields': (
                'email', 'date_of_birth', 'job', 'favorite'
            ), 'classes': ['collapse']
        })
    )

admin.site.register(Contact, ContactAdmin)

admin.site.register(Label)