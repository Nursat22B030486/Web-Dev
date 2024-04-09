from django.contrib import admin

from api.models import Company, Vacancy

# Register your models here.

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city')
    search_fields = ('id', 'name')

admin.site.register(Vacancy)
  