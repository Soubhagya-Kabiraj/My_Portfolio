from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request,'polls/home.html')

def about(request):
    return render(request,'polls/about.html')

def contact(request):
    return render(request,'polls/contact.html')

def skills(request):
    return render(request,'polls/skills.html')

def projects(request):
    return render(request,'polls/projects.html')

from django.shortcuts import render, redirect
from .models import ContactMessage


def contact(request):
    if request.method == "POST":
        ContactMessage.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email"),
            subject=request.POST.get("subject"),
            message=request.POST.get("message")
        )
        return redirect("contact")
    return render(request, "polls/contact.html")
