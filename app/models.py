from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User, Group
import os
import random


def content_file_name(instance, filename):
    now = timezone.now()
    x = str(now).replace("-", "").replace(" ", "").replace(":",
                                                           "").replace("+", "").replace(".", "")
    ext = filename.split('.')[-1]
    name = random.randint(100, 99999)
    filename = "%s%s.%s" % (x, name, ext)
    return os.path.join(filename)


class Account(models.Model):
	user = models.ForeignKey(User, blank=True)
	phone = models.IntegerField(default=0)
	city = models.CharField(max_length=255, blank=True, null=True)
	avatar = models.ImageField(upload_to=content_file_name, default='avt.png', null=True)
	token = models.CharField(max_length=255, blank=True, null=True)

	def __str__(self):
		return u'%s' % self.user


class Locality(models.Model):
	name = models.CharField(max_length=255, blank=True, null=True)

	def __str__(self):
		return u'%s' % self.name


class Society(models.Model):
	name = models.CharField(max_length=255, blank=True, null=True)
	locality = models.ForeignKey(Locality, blank=True, null=True)

	def __str__(self):
		return u'%s' % self.name


class Information(models.Model):
	list_choice_buy = (
	    ("buy", "Buy"),
	    ("rent", "Rent"),
	)

	list_choice_fields = (
	    ("resi", "Residential"),
	    ("land", "Land"),
	    ("comm", "Commercial"),
	)

	society = models.ForeignKey(Society, blank=True, null=True)
	city = models.CharField(max_length=255, blank=True, null=True)
	sq_ft = models.IntegerField(default=0)
	price = models.FloatField(null=True, blank=True, default=None)
	option = models.CharField(max_length=9, choices=list_choice_buy, default="buy")
	fields = models.CharField(max_length=9, choices=list_choice_fields, default="buy")

	def __str__(self):
		return u'%s' % self.society
