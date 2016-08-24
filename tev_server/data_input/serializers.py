from .models import Source, Sample, Gene, VariantAllele
from .models import SavedFishplotSubject, Name, CloneMetadata, CloneTimepointData
from rest_framework import serializers

class VariantAlleleSerializer(serializers.ModelSerializer):
    class Meta:
        model = VariantAllele
        fields = '__all__'

class SampleSerializer(serializers.ModelSerializer):
    VariantAlleles = VariantAlleleSerializer(many=True)
    class Meta:
        model = Sample
        fields = ('source', 'timepoint', 'timestamp', 'uuid', 'VariantAlleles')


class SourceSerializer(serializers.ModelSerializer):
    Samples = SampleSerializer(many=True)
    class Meta:
        model = Source
        fields = ('subject_id', 'uuid', 'Samples')

class GeneSerializer(serializers.ModelSerializer):
    VariantAlleles = VariantAlleleSerializer(many=True)
    class Meta:
        model = Gene
        fields = ('name', 'uuid', 'VariantAlleles')

class CloneTimepointDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CloneTimepointData
        fields = '__all__'

class CloneMetadataSerializer(serializers.ModelSerializer):
    timepoint_data = CloneTimepointDataSerializer(many=True)
    class Meta:
        model = CloneMetadata
        fields = ('name', 'key', 'parent', 'parent_index_of_this', 'index', 'ploidy', 'color', 'uuid', 'timepoint_data')

class NameSerializer(serializers.ModelSerializer):
    data = CloneMetadataSerializer(many=True)
    class Meta:
        model = Name
        fields = ('subject_id', 'name', 'uuid', 'data')

class SavedFishplotSubjectSerializer(serializers.ModelSerializer):
    name = NameSerializer(many=True)
    class Meta:
        model = SavedFishplotSubject
        fields = ('subject_id', 'uuid', 'name')