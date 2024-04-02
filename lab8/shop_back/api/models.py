from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f"Id: {self.id}, Name: {self.name}"
    
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name
        }
    
   

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"




class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(max_length=200)
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="products")

    def __str__(self) -> str:
        return f"ID: {self.id} Name: {self.name},  count: {self.count}"
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "count" : self.count,
            "is_active": self.is_active,
        }
    
    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"
