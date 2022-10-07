from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from accounts.models import User


# Register your models here.

class CustomUserAdmin(UserAdmin):
    """User model admin"""

    list_display = ('id', 'email')
    ordering = ('email',)
    
admin.site.register(User, CustomUserAdmin)
    