from django.urls import path
from .views import get_stock_info  # Import the view function from the appropriate file

urlpatterns = [
    path('stock/<str:symbol>/', get_stock_info, name='get_stock_info'),
]
