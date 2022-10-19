from django.contrib import admin
from django.contrib.auth.admin import UserAdmin



from .models import Note

class CustomAPIAdmin(admin.ModelAdmin):
    list_display = ('body','user',)

admin.site.register(Note, CustomAPIAdmin)

