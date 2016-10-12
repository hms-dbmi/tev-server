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
        fields = ('source', 'timepoint', 'uuid', 'VariantAlleles')


class SourceSerializer(serializers.ModelSerializer):
    Samples = SampleSerializer(many=True)
    class Meta:
        model = Source
        fields = ('subject_id', 'uuid', 'Samples')

class GeneSerializer(serializers.ModelSerializer):
    VariantAlleles = VariantAlleleSerializer(many=True)
    class Meta:
        model = Gene
        fields = ('name', 'chromosome', 'uuid', 'VariantAlleles')

# class RecursiveSerializer(serializers.Serializer):
#     def to_representation(self, value):
#         serializer = self.parent.parent.__class__(value, context=self.context)
#         return serializer.data

class CloneTimepointDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CloneTimepointData
        fields = '__all__'

class CloneMetadataSerializer(serializers.ModelSerializer):
#    children = RecursiveSerializer(many=True)
    timepoint_data = CloneTimepointDataSerializer(many=True)
    class Meta:
        model = CloneMetadata
        fields = ('name', 'key', 'parent', 'parent_index_of_this', 'index', 'group', 'start_point',
                  'ploidy', 'chrs_affected', 'color', 'uuid', 'timepoint_data')

class NameSerializer(serializers.ModelSerializer):
    data = CloneMetadataSerializer(many=True)
    class Meta:
        model = Name
        fields = ('subject_id', 'name', 'uuid', 'data')

class JustNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Name
        fields = ('name', 'uuid')

class SavedFishplotSubjectWithJustNameSerializer(serializers.ModelSerializer):
    saved_as = JustNameSerializer(many=True)
    class Meta:
        model = SavedFishplotSubject
        fields = ('subject_id', 'uuid', 'saved_as')


class SavedFishplotSubjectSerializer(serializers.ModelSerializer):
    saved_as = NameSerializer(many=True)
    class Meta:
        model = SavedFishplotSubject
        fields = ('subject_id', 'uuid', 'saved_as')