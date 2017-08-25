from django.conf.urls import url
from app import views

urlpatterns = [
    url(r'^api/search$', views.search, name='search'),
]

