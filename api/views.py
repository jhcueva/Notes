from email.policy import default
from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def getRoutes(request):
    return JsonResponse('Our api', safe=False)
