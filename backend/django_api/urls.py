from django.urls import path
from .views import ListCategoty, ListProduct, DetailCategory, DetailProduct

urlpatterns = [
    path('category', ListCategoty.as_view()),
    path('category/<int:pk>/', DetailCategory.as_view()),
    path('product', ListProduct.as_view()),
    path('product/<int:pk>/', DetailProduct.as_view()),
]