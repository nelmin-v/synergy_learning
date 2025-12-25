from django.shortcuts import render
from .forms import NameForm
from .models import UserName

def index(request):
    greeting = ""
    if request.method == "POST":
        form = NameForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            # Сохранение в базе данных
            UserName.objects.create(name=name)
            greeting = f"Здравствуйте, {name}!"
            return render(request, 'practice_app/index.html', {'greeting': greeting})
    else:
        form = NameForm()
    return render(request, 'practice_app/index.html', {'form': form, 'greeting': greeting})
