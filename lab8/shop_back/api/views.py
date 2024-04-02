from django.shortcuts import render

from django.http.response import JsonResponse

from api.models import Category, Product


# Create your views here.

def list_products(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]

    return JsonResponse(products_json, safe=False)

def get_product(request, pk):
    try: 
        product = Product.objects.get(id=pk)
    except Product.DoesNotExist as p:
        return JsonResponse({"error": str(p)})
    
    return JsonResponse(product.to_json())

def list_categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]

    return JsonResponse(categories_json, safe=False)

def get_category(request, pk):
    try: 
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({"error": str(e)})
    
    return JsonResponse(category.to_json())

def category_products(request, pk):
    try: 
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({"error": str(e)})
    
    products_json = [p.to_json() for p in category.products.all()]

    return JsonResponse(products_json, safe=False)
    
   

