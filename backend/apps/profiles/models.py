from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Developer(models.Model):
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    skills = models.CharField(max_length=200)
    availability = models.PositiveIntegerField(default=0)
    website_link = models.URLField()
    contacts = models.CharField(max_length=100)


class Employer(models.Model):
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    company = models.CharField(max_length=100)
