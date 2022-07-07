from operator import index
from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, "myform.html")


def second_form(request):
    return render(request, "form1.html")


def third_form(request):
    return render(request, "form2.html")

def fourth_form(request):
    return render(request, "form3.html")


def print_data(request):
    if request.method == 'POST':
        firstname = request.POST.get('stream')
        print(firstname)
        return render(request, "form1.html")