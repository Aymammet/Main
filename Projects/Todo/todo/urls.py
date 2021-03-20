from django.urls import path
from . import views

urlpatterns = [
    path('', views.list, name='to_do_list'),
    path('todo/edit', views.newtodo, name='newtodo'),
    path('todo/sorted', views.sort, name ='sort_by_name'),
    path('todo/sorted2', views.sort_by_when, name ='when'),
    path('todo/sorted3', views.created, name ='created'),
    path('todo/sorted0', views.pk, name ='sort_by_pk'),
    path('todo/<int:pk>/', views.detail, name = 'detail')
]

