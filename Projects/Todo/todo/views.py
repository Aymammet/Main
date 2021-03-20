from django.shortcuts import render, get_object_or_404
from .models import Todo
from django.utils import timezone
from .forms import NewForm
from django.shortcuts import redirect


def list(request):
    ls = Todo.objects.all()
    return render(request, 'todo/list.html', {'ls': ls})


def sort(request):
    ls2 = Todo.objects.order_by('do_list')
    return render(request, 'todo/sorted.html', {'ls2': ls2})


def sort_by_when(request):
    ls3 = Todo.objects.order_by('when')
    return render(request, 'todo/sorted2.html', {'ls3': ls3})


def created(request):
    ls4 = Todo.objects.order_by('created_date')
    return render(request, 'todo/sorted3.html', {'ls4': ls4})

def pk(request):
    ls0 = Todo.objects.order_by('pk')
    return render(request, 'todo/sorted0.html', {'ls0': ls0})

def newtodo(request):
    if request.method == "POST":
        form = NewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('to_do_list')
    else:
        form = NewForm()
    return render(request, 'todo/edit.html', {'form': form})

def detail(request, pk):
    current = get_object_or_404(Todo, pk=pk)
    return render(request, 'todo/detail.html', {'current':current})
