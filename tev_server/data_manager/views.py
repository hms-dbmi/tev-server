from django.shortcuts import render, HttpResponse, redirect
from .forms import TevFileForm
from .models import Source, Sample, Gene, VariantAllele
from .models import SavedFishplotSubject, Name, CloneMetadata, CloneTimepointData
from .serializers import SourceSerializer, SampleSerializer, GeneSerializer, VariantAlleleSerializer
from .serializers import SavedFishplotSubjectSerializer, NameSerializer, CloneMetadataSerializer, \
    CloneTimepointDataSerializer
from rest_framework import viewsets
import datetime
import re
import json


def index(request):
    source_table_data = []
    source_data = Source.objects.all()
    for source in source_data:
        name = source.subject_id
        uuid = source.uuid
        timepoints = source.Samples.get_queryset()
        alleles = []
        for i in range(0, len(timepoints)):
            num_of_alleles = int(len(timepoints[i].VariantAlleles.get_queryset()))
            alleles.append(num_of_alleles)
            max_allele = max(alleles)
        source_table_data.append({
            'name': name,
            'uuid': uuid,
            'timepoints': len(timepoints),
            'alleles': max_allele
        })
    context = {'source_table_data': source_table_data}
    return render(request, 'data_manager/index.html', context)


def input(request):
    tev_file = TevFileForm()
    context = {'tev_file': tev_file}
    return render(request, 'data_manager/input.html', context)


# View for REST API containing everything nested within a source
class SourceRESTAPI(viewsets.ModelViewSet):
    queryset = Source.objects.all()
    serializer_class = SourceSerializer


class SampleRESTAPI(viewsets.ModelViewSet):
    queryset = Sample.objects.all()
    serializer_class = SampleSerializer


class GeneRESTAPI(viewsets.ModelViewSet):
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer


class VariantAlleleRESTAPI(viewsets.ModelViewSet):
    queryset = VariantAllele.objects.all()
    serializer_class = VariantAlleleSerializer


class SavedFishplotSubject_idViewset(viewsets.ModelViewSet):
    queryset = SavedFishplotSubject.objects.all()
    serializer_class = SavedFishplotSubjectSerializer


class SavedAsNameViewset(viewsets.ModelViewSet):
    queryset = Name.objects.all()
    serializer_class = NameSerializer


class CloneMetadataViewset(viewsets.ModelViewSet):
    queryset = CloneMetadata.objects.all()
    serializer_class = CloneMetadataSerializer


class CloneTimepointDataViewset(viewsets.ModelViewSet):
    queryset = CloneTimepointData.objects.all()
    serializer_class = CloneTimepointDataSerializer


# View that parses the TEV test results
# Saves patient information and TEV test information to database
def data_to_database(request):
    file = request.FILES.get('file')
    # Parse the Tev file
    parse_tev_file(file)

    return redirect('data_manager:index')


def correct_timepoints(subject_id):
    source_uuid = Source.objects.get(subject_id=subject_id).uuid
    samples = Sample.objects.filter(source=source_uuid)
    # order by timestamp (the date the sample was taken)
    earliest_date = Sample.objects.filter(source=source_uuid).order_by('timestamp')[0]
    for sample in samples:
        days_elapsed = (sample.timestamp - earliest_date.timestamp).days
        sample.timepoint = days_elapsed
        sample.save()
    return


#########################################################
#  This depends on future files having same structure  #
########################################################
def parse_tev_file(file):
    file = file.read().decode('UTF-8')
    file = file.split('\n')
    file = [row.split('\t') for row in file]

    subject_id_index = int(file[0].index("Subject ID"))
    date_index = int(file[0].index("Date"))
    gene_index = int(file[0].index("Gene"))
    chromosome_index = int(file[0].index("Chr"))
    position_index = int(file[0].index("Position"))
    aa_change_index = int(file[0].index("AA_change"))
    total_read_index = int(file[0].index("Total Read"))
    ref_read_index = int(file[0].index("Ref_read"))
    alt_read_index = int(file[0].index("Var_read"))
    alternative_index = int(file[0].index("Alt"))
    reference_index = int(file[0].index("Ref"))
    alt_freq_index = int(file[0].index("VAF"))
    cDNA_change_index = int(file[0].index("cDNA_change"))
    variant_type_index = int(file[0].index("VariantType"))
    assay_index = int(file[0].index("Assay"))
    ref_seq_index = int(file[0].index("RefSeq"))

    number_of_columns = len(file[0])

    # Possible error: Have an empty line at bottom of file from hitting enter
    for i in range(1, len(file)):
        if (len(file[i]) != number_of_columns):
            continue

        patient_id = file[i][subject_id_index]

        sample_date = file[i][date_index]
        sample_date = sample_date.split('/')
        if (len(sample_date[0]) == 1):
            sample_date[0] = "0" + sample_date[0]
        if (len(sample_date[1]) == 1):
            sample_date[1] = "0" + sample_date[1]
        sample_date[2] = "20" + sample_date[2]
        sample_date = sample_date[2] + "-" + sample_date[0] + "-" + sample_date[1]
        sample_date = datetime.datetime.strptime(sample_date, "%Y-%m-%d").date()

        if (Source.objects.filter(subject_id=patient_id).exists()):
            source = Source.objects.get(subject_id=patient_id)
        else:
            source = Source()
            source.subject_id = patient_id
            source.save()

        if Sample.objects.filter(source=source, timestamp=sample_date).exists():
            sample = Sample.objects.get(source=source, timestamp=sample_date)
        else:
            sample = Sample()
            sample.timepoint = 0
            sample.timestamp = sample_date
            sample.assay = file[i][assay_index]
            sample.source = source
            sample.save()
        if Gene.objects.filter(name=file[i][gene_index]).exists():
            gene = Gene.objects.get(name=file[i][gene_index])
        else:
            gene = Gene()
            gene.name = file[i][gene_index]
            gene.chromosome = file[i][chromosome_index]
            gene.position = int(file[i][position_index])
            gene.save()
        variant_allele = VariantAllele()
        variant_allele.sample = sample
        variant_allele.gene = gene
        AA_change = file[i][aa_change_index]
        AA_change = re.split('(\d+)', AA_change)
        variant_allele.AA_original = AA_change[0]
        variant_allele.AA_position = int(AA_change[1])
        variant_allele.AA_variant = AA_change[2]

        try:
            variant_allele.total_reads = int(file[i][total_read_index])
        except ValueError:
            variant_allele.total_reads = None

        try:
            variant_allele.ref_reads = int(file[i][ref_read_index])
        except ValueError:
            variant_allele.ref_reads = None

        try:
            variant_allele.alt_reads = int(file[i][alt_read_index])
        except ValueError:
            variant_allele.alt_reads = None
        variant_allele.alternative = file[i][alternative_index]
        variant_allele.reference = file[i][reference_index]

        try:
            variant_allele.alternative_freq = round(float(file[i][alt_freq_index]))
            variant_allele.reference_freq = int(100 - variant_allele.alternative_freq)
        except ValueError:
            variant_allele.alternative_freq = None
            variant_allele.reference_freq = None

        variant_allele.cDNA_change = file[i][cDNA_change_index]
        variant_allele.type = file[i][variant_type_index]
        variant_allele.ref_seq = file[i][ref_seq_index]
        variant_allele.save()

        correct_timepoints(patient_id)


def save_fishplot(request):
    post_info = request.body
    post_info = json.loads(post_info)

    subject_id = post_info["subject_id"]
    name = post_info["name"]
    used_indices = post_info["used_data_indices"]
    nested_data = post_info["data"]

    if SavedFishplotSubject.objects.filter(subject_id=subject_id).exists():
        subject = SavedFishplotSubject.objects.get(subject_id=subject_id)
    else:
        subject = SavedFishplotSubject()
        subject.subject_id = subject_id
        subject.save()

    saved_as = Name()
    saved_as.subject_id = subject
    saved_as.name = name
    saved_as.save()

    for index in used_indices:
        current_clone = nested_data[index]
        clone = CloneMetadata()
        clone.name = saved_as
        clone.key = current_clone["key"]
        clone.parent_index_of_this = current_clone["parent_index_of_this"]
        clone.index = int(current_clone["index"])
        if current_clone["parent_index_of_this"] != "plot":
            clone.parent = CloneMetadata.objects.get(index=int(clone.parent_index_of_this), name=saved_as,
                                                     key=nested_data[int(clone.parent_index_of_this)]["key"])
        else:
            clone.parent = None
        clone.ploidy = int(current_clone["ploidy"])
        clone.color = current_clone["color"]
        clone.save()

        timepoint_data = current_clone["values"]
        for timepoint in timepoint_data:
            data = CloneTimepointData()
            data.clone = clone
            data.Sample_Barcode = timepoint["Sample_Barcode"]
            data.alt_count = int(timepoint["alt_count"])
            data.allele = timepoint["allele"]
            data.cluster = int(timepoint["cluster"])
            data.save()

    # leave HttpResponse empty so we stay on page after saving fishplot
    return HttpResponse()
