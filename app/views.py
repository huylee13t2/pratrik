from django.shortcuts import render
from django.db.models import Q
import json
from django.http import *
from django.views.decorators.csrf import csrf_exempt
import jwt
from django.contrib.auth.models import User, Group

from app.models import Account, Locality, Society, Information

def index(request):
	return render(request, 'index.html')

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



# user account
@csrf_exempt
def signup(request):
	username = request.POST.get('username')
	password = request.POST.get('password')
	email = request.POST.get('email')
	phone = request.POST.get('phone')
	city = request.POST.get('city')

	try:
		user = User(username = username, password=password, email=email)
		user.set_password(password)
		user.save()
		print('----> save user')

		# create token
		token = jwt.encode({'some': username}, 'secret', algorithm='HS256')
		print(token)

		account = Account(user=user, phone=phone, city=city, token=token)
		account.save()
		print('-------> save account')

		response = {
			'result' : user.id
		}
	except:
		response = {
			'result' : -999
		}

	return JsonResponse(response)


@csrf_exempt
def login(request):
	username = request.POST.get('username')
	password = request.POST.get('password')
	print('login')
	# try:
	account = Account.objects.get(user__username = username)
	if account.user.check_password(password):
		response = {
			'result' : account.id,
			'data' : {
				'username' : account.user.username,
				'email' : account.user.email,
				'token' : account.token,
				'avatar' : account.avatar.name,
				'isAdmin' : account.isAdmin,
			}
		}
	else:
		response = {
			'result' : 0,
		}
	# except:
	# 	response = {
	# 		'result' : -999,
	# 	}

	return JsonResponse(response)