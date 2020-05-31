from rest_framework import routers
from my_app.api_view import CustomerViewset


router = routers.DefaultRouter()
router.register(r'customer', CustomerViewset, 'customer')
