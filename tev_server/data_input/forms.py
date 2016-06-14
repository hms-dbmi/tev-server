from django import forms

class SourceForm(forms.Form):
    name = forms.CharField(max_length=250)



#This form will be used in views.py of users app
class TevFileForm(forms.Form):
    file = forms.FileField(label='Choose Test Results')
