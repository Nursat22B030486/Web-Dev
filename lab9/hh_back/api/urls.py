from django.urls import path

from api.views import company_list, company_detail, company_vacancies
from api.views import vacancy_list, vacancy_detail, top_vacancy

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:pk>/', company_detail),
    path('companies/<int:pk>/vacancies/', company_vacancies),

    path('vacancies/', vacancy_list),
    path('vacancies/<int:pk>/', vacancy_detail),
    path('vacancies/top/<int:n>/', top_vacancy)
]
