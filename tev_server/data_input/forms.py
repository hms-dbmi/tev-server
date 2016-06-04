from django import forms

class TevData(forms.Form):
    file = forms.FileField(label="Data Upload: ")

class PatientIdentifier(forms.Form):
    patient = forms.CharField(max_length=250, label="Patient Identifier")

class Physician(forms.Form):
    physician = forms.CharField(max_length=250, label="Physician")

class Hospital(forms.Form):
    hospital = forms.CharField(max_length=250, label="Hospital")

class CancerType(forms.Form):
    cancertype = forms.CharField(max_length=1000, label="Cancer Type")