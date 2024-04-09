from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer

# Create your views here.

@csrf_exempt
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    
        # json_companies = [c.to_json() for c in companies]
        # return JsonResponse(json_companies, safe=False)


@csrf_exempt
def company_detail(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)})
    
    if request.method == "GET":
        serializer = CompanySerializer(company, many=False)
        return JsonResponse(serializer.data)
    
def company_vacancies(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)})
    
    if request.method == "GET":
        company_vacancies = VacancySerializer(company.vacancies.all(), many=True)

        # serializer = [VacancySerializer(v) for v in company.vacancies.all()]
        # company_vacancies = [v.to_json() for v in company.vacancies.all()]

        return JsonResponse(company_vacancies.data, safe=False)
        
def vacancy_list(request):
    if request.method == "GET":
        serializer = VacancySerializer(Vacancy.objects.all(), many=True)
        return JsonResponse(serializer.data, safe=False)

def vacancy_detail(request, pk=None):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
    
def top_vacancy(request, n=None):
    if n > Vacancy.objects.count():
        return JsonResponse({'error': f"Don't have {n} vacancies in the DB"})
    
    top_vacancies = Vacancy.objects.order_by('-salary')[:n]
    serializer = VacancySerializer(top_vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
    
