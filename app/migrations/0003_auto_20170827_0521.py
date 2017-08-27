# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-27 05:21
from __future__ import unicode_literals

import app.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20170824_0738'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='isAdmin',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='account',
            name='avatar',
            field=models.ImageField(default='avt.png', null=True, upload_to=app.models.content_file_name),
        ),
    ]