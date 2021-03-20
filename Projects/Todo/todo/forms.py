from django import forms
from .models import Todo
import datetime 

class NewForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ('do_list', 'when', 'created_date')

        widgets={
            'do_list': forms.TextInput(attrs={'style': 'width:420px; height:100px;'})
            }