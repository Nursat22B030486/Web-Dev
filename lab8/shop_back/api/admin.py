from unicodedata import category
from django.contrib import admin

from api.models import Product, Category

# Register your models here.

# 1 option
# admin.site.register(Product)

# 2 Option

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display= ('id', 'name',  'price', 'count', 'category')
    search_fields = ('name', )

