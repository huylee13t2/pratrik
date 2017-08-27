from django.conf.urls import url
from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/search$', views.search, name='search'),
    url(r'^api/list/view/(?P<pk>[0-9]+)$', views.list_view, name='list_view'),
    # user
    url(r'^api/signup$', views.signup, name='signup'),
    url(r'^api/login$', views.login, name='login'),
]

