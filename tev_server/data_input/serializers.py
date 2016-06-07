from .models import tevSample, patient
from rest_framework import serializers

class tevSampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = tevSample
        fields = ('Hugo_Symbol', 'AA_Change', 'allele', 'Sample_Barcode', 'alt_count', 'ref_count')


class patientSerializer(serializers.ModelSerializer):
    results = tevSampleSerializer(many=True)
    class Meta:
        model = patient
        fields = ('PatientID', 'Physician', 'Hospital', 'Cancer_Type', 'ResearcherID', 'results')
