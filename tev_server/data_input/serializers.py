from .models import tevSample
from rest_framework import serializers

class tevSampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = tevSample
        fields = '__all__'