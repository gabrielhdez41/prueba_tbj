from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=5)

    def __str__(self):
        return self.name
    
class Product(models.Model):
    name = models.CharField(max_length=50)
    url_image = models.CharField(max_length=255)
    price = models.FloatField()
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.name