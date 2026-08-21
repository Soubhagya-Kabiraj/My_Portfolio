from django.urls import path
from . import views

urlpatterns=[
    path('',views.home,name='home'),
    path('about.html',views.about, name='about'),
    path('contact.html',views.contact, name='contact'),
    path('skills.html',views.skills, name='skills'),
    path('projects.html',views.projects, name='projects'),
    path('experience.html',views.experience, name='experience'),
    path('certificates.html',views.certificates, name='certificates'),
]