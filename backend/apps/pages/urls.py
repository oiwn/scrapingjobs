from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.IndexPageView.as_view(), name='index'),
    url(r'^contacts$', views.ContactsPageView.as_view(), name='contacts'),
    url(r'^about$', views.AboutPageView.as_view(), name='about'),
]
