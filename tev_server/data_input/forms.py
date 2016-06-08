from django import forms

class inputForm(forms.Form):
    patientID = forms.CharField(max_length=250, label="Patient ID")
    physician = forms.CharField(max_length=250, label="Physician")
    hospital = forms.CharField(max_length=250, label="Hospital")
    cancer_type = forms.CharField(max_length=1000, label="Cancer Type")
    file = forms.FileField(label="Data Upload: ")


#This form will be used in views.py of users app
class addTevDataFile(forms.Form):
    file = forms.FileField(label='Add more test results')
