from __future__ import unicode_literals

from django.db import models

class patient(models.Model):
    PatientID = models.CharField(max_length=250)
    Physician = models.CharField(max_length=250)
    ResearcherID = models.IntegerField()
    Hospital = models.CharField(max_length=250)
    Cancer_Type = models.CharField(max_length=1000)

    def __str__(self):
        return self.PatientID

class tevSample(models.Model):
    #Link each test result to a patient
    patient = models.ForeignKey(patient, on_delete=models.CASCADE, related_name='results', null=True)
    Hugo_Symbol = models.CharField(max_length=150, null=True)
    AA_Change = models.CharField(max_length=150, null=True)
    allele = models.CharField(max_length=250, null=True)
    Sample_Barcode = models.CharField(max_length=250, null=True)
    alt_count = models.IntegerField(null=True)
    ref_count = models.IntegerField(null=True)

    def __str__(self):
        return self.Hugo_Symbol + '-' + self.AA_Change
