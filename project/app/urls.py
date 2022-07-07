from django.urls import path
from . import views
urlpatterns = [
    path('', views.index,name='index'),
    path('second_form', views.second_form,name='second_form'),
    path('third_form', views.third_form,name='third_form'),
    path('fourth_form', views.fourth_form,name='fourth_form'),
    path('print_data', views.print_data,name='print_data'),
]
