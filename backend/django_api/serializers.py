from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        fields = (
            'id',
            'name',
        )
        model = Category

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        fields = (
            'id',
            'name',
            'url_image',
            'price',
            'category',
        )
        model = Product