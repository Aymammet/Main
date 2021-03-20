from django.db import models
from django.utils import timezone

class Todo(models.Model):
    do_list = models.TextField()
    when = models.DateTimeField(default=timezone.now)
    created_date = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.do_list
