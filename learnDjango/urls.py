from django.contrib import admin
from django.urls import path

from django.conf.urls import url, include

# rest_framework router
from .api import router

from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    url(r'^api/v1/', include(router.urls)),
]
