# Generated by Django 3.2 on 2021-04-29 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactApi', '0002_label_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='contact-images'),
        ),
    ]
