from django.conf.urls import url
from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/search$', views.search, name='search'),
    # user
    url(r'^api/signup$', views.signup, name='signup'),
    url(r'^api/login$', views.login, name='login'),
]

