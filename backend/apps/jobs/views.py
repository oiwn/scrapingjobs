from django.shortcuts import render
from django.views.generic.base import TemplateView


class JobsListPageView(TemplateView):
    template_name = "jobs_list.html"

