from django.db import models

# Create your models here.
class Product(models.Model):
    COLOR = {
        "Black" : "Black",
        "White": "White",
    }
    SHIRT_SIZES = {
        "S": "Small",
        "M": "Medium",
        "L": "Large",
    }
    def __str__(self) -> str:
        return self.title
    image = models.CharField(max_length=225, blank=True, null=True)
    title = models.CharField(max_length=225, blank=True, null=True)
    color = models.CharField(max_length=10, choices=COLOR, default="Black")
    shirt_size = models.CharField(max_length=1, choices=SHIRT_SIZES, default="M")
    price = models.FloatField(blank=True, null=True)
    discount_price = models.FloatField(blank=True, null=True)
