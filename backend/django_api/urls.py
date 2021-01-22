from django.urls import path
from .views import ListCategoty, ListProduct, DetailCategory, DetailProduct

urlpatterns = [
    path('category', ListCategoty.as_view(), name='categoria'),
    path('category/<int:pk>/', DetailCategory.as_view(), name='solacategoria'),
    path('product', ListProduct.as_view(), name='producto'),
    path('product/<int:pk>/', DetailProduct.as_view(), name='soloproducto'),
]