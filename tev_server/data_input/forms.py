from django import forms

#This form will be used in views.py of users app
class TevFileForm(forms.Form):
    file = forms.FileField(label='Choose Test Results')
