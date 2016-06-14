from __future__ import unicode_literals

from django.db import models
import uuid

class Source(models.Model):
    name = models.CharField(max_length=250)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.name

class Sample(models.Model):
    source  = models.ForeignKey(Source, on_delete=models.CASCADE, related_name='Samples')
    timepoint = models.CharField(max_length=250)
    timestamp = models.DateField()
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.timepoint

class Gene(models.Model):
    hugo_symbol = models.CharField(max_length=250)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.hugo_symbol

class VariantAllele(models.Model):
    sample = models.ForeignKey(Sample, on_delete=models.CASCADE, related_name='VariantAlleles')
    gene = models.ForeignKey(Gene, on_delete=models.CASCADE, related_name='VariantAlleles')
    AA_position = models.IntegerField()
    AA_original = models.CharField(max_length=10)
    AA_variant = models.CharField(max_length=10)
    alternative_freq = models.IntegerField()
    reference_freq = models.IntegerField()
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.gene.hugo_symbol + '-' + self.AA_original + str(self.AA_position) + self.AA_variant
