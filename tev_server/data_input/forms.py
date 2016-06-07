from django import forms

class inputForm(forms.Form):
    patientID = forms.CharField(max_length=250, label="Patient ID")
    physician = forms.CharField(max_length=250, label="Physician")
    hospital = forms.CharField(max_length=250, label="Hospital")
    cancer_type = forms.CharField(max_length=1000, label="Cancer Type")
    file = forms.FileField(label="Data Upload: ")