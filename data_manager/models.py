from __future__ import unicode_literals
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
import uuid

#Source is equivalent to patient
class Source(models.Model):
    subject_id = models.CharField(max_length=250)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.subject_id

class Sample(models.Model):
    source  = models.ForeignKey(Source, on_delete=models.CASCADE, related_name='Samples')
    timepoint = models.IntegerField()
    sample_barcode = models.CharField(max_length=250, null=True)
    assay = models.CharField(max_length=250, null=True)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        if self.timepoint != None:
            return self.timepoint
        else:
            return self.sample_barcode

class Gene(models.Model):
    name = models.CharField(max_length=250)
    chromosome = models.CharField(max_length=2, null=True)
    position = models.IntegerField(null=True)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.name

class VariantAllele(models.Model):
    sample = models.ForeignKey(Sample, on_delete=models.CASCADE, related_name='VariantAlleles')
    gene = models.ForeignKey(Gene, on_delete=models.CASCADE, related_name='VariantAlleles')
    AA_position = models.IntegerField()
    AA_original = models.CharField(max_length=10)
    AA_variant = models.CharField(max_length=10)
    total_reads = models.IntegerField(null=True)
    alt_reads = models.IntegerField(null=True)
    ref_reads = models.IntegerField(null=True)
    alternative = models.CharField(max_length=250, null=True)
    alternative_freq = models.IntegerField()
    reference = models.CharField(max_length=250)
    reference_freq = models.IntegerField()
    type = models.CharField(max_length=250, null=True)
    cDNA_change = models.CharField(max_length=250, null=True)
    ref_seq = models.CharField(max_length=250, null=True)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.gene.name + '-' + self.AA_original + str(self.AA_position) + self.AA_variant

class SavedFishplotSubject(models.Model):
    subject_id = models.CharField(max_length=250)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    def __str__(self):
        return self.subject_id

class Name(models.Model):
    subject_id = models.ForeignKey(SavedFishplotSubject, on_delete=models.CASCADE, related_name='saved_as')
    name = models.CharField(max_length=250)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.subject_id.subject_id + ' - ' + self.name

class CloneMetadata(models.Model):
    name = models.ForeignKey(Name, on_delete=models.CASCADE, related_name='data')
    parent = models.ForeignKey('self', on_delete=models.CASCADE, related_name='children', null=True)
    key = models.CharField(max_length=250)
    parent_index_of_this = models.CharField(max_length=10) #keep as char because it could be "plot"
    index = models.IntegerField()
    group = models.IntegerField()
    start_point = models.FloatField()
    ploidy = models.IntegerField()
    chrs_affected = models.CharField(max_length=10)
    color = models.CharField(max_length=20)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.name.name + ' - ' + self.key

class CloneTimepointData(models.Model):
    clone = models.ForeignKey(CloneMetadata, on_delete=models.CASCADE, related_name='timepoint_data')
    Sample_Barcode = models.CharField(max_length=250)
    alt_count = models.IntegerField()
    allele = models.CharField(max_length=250)
    cluster = models.IntegerField()
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.clone.key + ' - ' + self.Sample_Barcode