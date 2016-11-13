from django.shortcuts import render, HttpResponse, redirect
from .forms import TevFileForm
from .models import Source, Sample, Gene, VariantAllele
from .models import SavedFishplotSubject, Name, CloneMetadata, CloneTimepointData
from .serializers import SourceSerializer, SampleSerializer, GeneSerializer, VariantAlleleSerializer
from .serializers import SavedFishplotSubjectSerializer, NameSerializer, CloneMetadataSerializer, \
    CloneTimepointDataSerializer, SavedFishplotSubjectWithJustNameSerializer
from rest_framework import viewsets
from rest_framework.decorators import list_route
from rest_framework.response import Response
import datetime
import re
import json
from django.views.decorators.csrf import csrf_exempt

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

class SavedFishplotSubjectWithJustNamesViewset(viewsets.ModelViewSet):
    queryset = SavedFishplotSubject.objects.all()
    serializer_class = SavedFishplotSubjectWithJustNameSerializer

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

    #Subject ID is required
    subject_id_index = int(file[0].index("Subject ID"))


    timepoint_index = int(file[0].index("Day"))

    try:
        sample_barcode_index = int(file[0].index("Sample_Barcode"))
    except:
        sample_barcode_index = None

    #Gene is required
    gene_index = int(file[0].index("Gene"))

    try:
        chromosome_index = int(file[0].index("Chr"))
    except:
        chromosome_index = None

    try:
        position_index = int(file[0].index("Position"))
    except:
        position_index = None

    #AA_change is required
    aa_change_index = int(file[0].index("AA_change"))

    try:
        total_read_index = int(file[0].index("Total Read"))
    except:
        total_read_index = None

    try:
        ref_read_index = int(file[0].index("Ref_read"))
    except:
        ref_read_index = None

    try:
        alt_read_index = int(file[0].index("Var_read"))
    except:
        alt_read_index = None

    try:
        alternative_index = int(file[0].index("Alt"))
    except:
        alternative_index = None

    try:
        reference_index = int(file[0].index("Ref"))
    except:
        reference_index = None

    #VAF is required
    alt_freq_index = int(file[0].index("VAF"))

    try:
        cDNA_change_index = int(file[0].index("cDNA_change"))
    except:
        cDNA_change_index = None

    try:
        variant_type_index = int(file[0].index("VariantType"))
    except:
        variant_type_index = None

    try:
        assay_index = int(file[0].index("Assay"))
    except:
        assay_index = None

    try:
        ref_seq_index = int(file[0].index("RefSeq"))
    except:
        ref_seq_index = None

    number_of_columns = len(file[0])

    # Possible error: Have an empty line at bottom of file from hitting enter
    for i in range(1, len(file)):
        if (len(file[i]) != number_of_columns):
            continue

        patient_id = file[i][subject_id_index]

        # if date_index == None:
        #     sample_date = None
        # else:
        #     try:
        #         sample_date = file[i][date_index]
        #         sample_date = sample_date.split('/')
        #         if (len(sample_date[0]) == 1):
        #             sample_date[0] = "0" + sample_date[0]
        #         if (len(sample_date[1]) == 1):
        #             sample_date[1] = "0" + sample_date[1]
        #         sample_date[2] = "20" + sample_date[2]
        #         sample_date = sample_date[2] + "-" + sample_date[0] + "-" + sample_date[1]
        #         sample_date = datetime.datetime.strptime(sample_date, "%Y-%m-%d").date()
        #     except:
        #         sample_date = None

        if (Source.objects.filter(subject_id=patient_id).exists()):
            source = Source.objects.get(subject_id=patient_id)
        else:
            source = Source()
            source.subject_id = patient_id
            source.save()

        if Sample.objects.filter(source=source, timepoint=file[i][timepoint_index]).exists():
            sample = Sample.objects.get(source=source, timepoint=file[i][timepoint_index])
        else:
            sample = Sample()
            sample.timepoint = file[i][timepoint_index]
        try:
            sample.sample_barcode = str(file[i][sample_barcode_index])
        except:
            sample.sample_barcode = None
            try:
                sample.assay = str(file[i][assay_index])
            except:
                sample.assay = None
            sample.source = source
            sample.save()

        if Gene.objects.filter(name=file[i][gene_index]).exists():
            gene = Gene.objects.get(name=file[i][gene_index])
        else:
            gene = Gene()
            gene.name = file[i][gene_index]
            try:
                gene.chromosome = file[i][chromosome_index]
            except:
                gene.chromosome = None
            try:
                gene.position = int(file[i][position_index])
            except:
                gene.position = None
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

        try:
            variant_allele.alternative = str(file[i][alternative_index])
        except:
            variant_allele.alternative = None

        try:
            variant_allele.reference = str(file[i][reference_index])
        except:
            variant_allele.reference = None

        try:
            variant_allele.alternative_freq = round(float(file[i][alt_freq_index]))
            variant_allele.reference_freq = int(100 - variant_allele.alternative_freq)
        except ValueError:
            variant_allele.alternative_freq = None
            variant_allele.reference_freq = None

        try:
            variant_allele.cDNA_change = str(file[i][cDNA_change_index])
        except:
            variant_allele.cDNA_change = None

        try:
            variant_allele.type = str(file[i][variant_type_index])
        except:
            variant_allele.type = None

        try:
            variant_allele.ref_seq = str(file[i][ref_seq_index])
        except:
            variant_allele.ref_seq

        variant_allele.save()

@csrf_exempt
def save_fishplot(request):
    post_info = request.body
    post_info = json.loads(post_info.decode('utf-8'))

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
        print(current_clone)
        clone = CloneMetadata()
        clone.name = saved_as
        clone.key = current_clone["key"]
        clone.parent_index_of_this = current_clone["parent_index_of_this"]
        clone.index = int(current_clone["index"])
        clone.group = int(current_clone["group"])
        clone.start_point = float(current_clone["start_point"])
        clone.chrs_affected = current_clone["chrs_affected"]


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
            data.conserved_alt_count = int(timepoint["conserved_alt_count"])
            data.allele = timepoint["allele"]
            try:
                cluster = int(timepoint["cluster"])
            except:
                cluster = None

            data.cluster = cluster
            data.save()

    # leave HttpResponse empty so we stay on page after saving fishplot
    return HttpResponse()
