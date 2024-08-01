from django.shortcuts import render
from .models import Product, Orders
# Create your views here.
def home(request):
    products = Product.objects.all()
    return render(request, 'shop/home.html', {'products':products})

def orders(request):
    return render(request, 'shop/orders.html')

def checkout(request):
    if request.method == "POST":
        items = request.POST.get('items',"")
        name = request.POST.get('name',"")
        phone = request.POST.get('phone',"")
        email = request.POST.get('email',"")
        address = request.POST.get('address',"")
        notes = request.POST.get('notes',"")
        order = Orders(items=items, name=name, phone=phone, email=email,address=address,notes=notes)
        order.save()
    return render(request, 'shop/orders.html')