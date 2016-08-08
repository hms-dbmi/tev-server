from .models import Source, Sample, Gene, VariantAllele
from rest_framework import serializers

class VariantAlleleSerializer(serializers.ModelSerializer):
    class Meta:
        model = VariantAllele
        fields = '__all__'

class SampleSerializer(serializers.ModelSerializer):
    VariantAlleles = VariantAlleleSerializer(many=True)
    class Meta:
        model = Sample
        fields = ('source', 'timepoint', 'timestamp', 'VariantAlleles', 'uuid')


class SourceSerializer(serializers.ModelSerializer):
    Samples = SampleSerializer(many=True)
    class Meta:
        model = Source
        fields = ('subject_id', 'Samples', 'uuid')

class GeneSerializer(serializers.ModelSerializer):
    VariantAlleles = VariantAlleleSerializer(many=True)
    class Meta:
        model = Gene
        fields = ('name', 'VariantAlleles', 'uuid')