from django.shortcuts import render
from django.db.models import Q
import json
from django.http import *
from django.views.decorators.csrf import csrf_exempt
# import jwt
from django.contrib.auth.models import User, Group

from app.models import Account, Locality, Society, Information

@csrf_exempt
def search(request):
	city = request.POST.get('city')
	locality = request.POST.get('locality')
	option = request.POST.get('option')
	fields = request.POST.get('fields')

	info = Information.objects.filter(Q(city__contains = city) & Q(option__contains = option) 
		& Q(fields__contains = fields) & Q(society__locality__name__contains = locality) )

	print(info)
	arr = []
	for obj in info:
		print('----------')
		print(obj)
		arr.append({
			'id' : obj.id,
			'locality' : obj.society.locality.name,
			'society' : obj.society.name,
			'sq_ft' : obj.sq_ft,
			'price' : obj.price,
		})

	print(arr)
	response = {
		'result' : 1,
		'data' : arr
	}

	return JsonResponse(response)
