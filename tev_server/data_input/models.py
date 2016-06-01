from __future__ import unicode_literals

from django.db import models

class tevSample(models.Model):
    Hugo_Symbol = models.CharField(max_length=150)
    AA_Change = models.CharField(max_length=150)
    Sample_Barcode = models.CharField(max_length=250)
    alt_count = models.IntegerField()
    ref_count = models.IntegerField()

    def __str__(self):
        return self.Hugo_Symbol + '-' + self.AA_Change
