# Generated by Django 3.1.5 on 2021-01-23 01:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('django_api', '0002_auto_20210122_0126'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='category',
            table='django_api_category',
        ),
        migrations.AlterModelTable(
            name='product',
            table='django_api_product',
        ),
    ]
