
from django.urls import path, re_path
from api.views import get_product, list_products, list_categories, get_category, category_products


urlpatterns = [
    path('products/', list_products),
    path('products/<int:pk>/', get_product),
    path('categories/', list_categories),
    path('categories/<int:pk>', get_category),
    path('categories/<int:pk>/products', category_products)
    
]