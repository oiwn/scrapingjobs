from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^jobs$', views.JobsListPageView.as_view(), name='jobs-list'),
]
