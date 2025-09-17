<x-admin-layout title="{{ $title }}">
    <!-- begin:: css local -->
    @push('css')
    <link rel="stylesheet" type="text/css" href="{{ asset_admin('vendors/css/forms/select/select2.min.css') }}">
    @endpush
    <!-- end:: css local -->

    <!-- begin:: content -->
    <section>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header border-bottom">
                        <div class="head-label">
                            <h4 class="card-title">{{ $title }}</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form id="form-add-upd" class="form form-horizontal mt-2" action="{{ route('admin.post.update') }}" method="POST">
                            <!-- begin:: id -->
                            <input type="hidden" name="id_post" id="id_post" value="{{ $post->id_post }}" />
                            <!-- end:: id -->

                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="title">Judul&nbsp;*</label>
                                </div>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control form-control-sm" id="title" name="title" placeholder="Masukkan judul" value="{{ $post->title }}" />
                                    <div class="invalid-feedback"></div>
                                </div>
                            </div>
                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="id_category">Kategori&nbsp;*</label>
                                </div>
                                <div class="col-sm-9 my-auto">
                                    <select class="form-select form-select-sm" id="id_category" name="id_category">
                                        <option value=""></option>
                                        @foreach ($category as $item)
                                        <option value="{{ $item->id_category }}" {{ $item->id_category == $post->id_category ? 'selected' : '' }}>{{ $item->name }}</option>
                                        @endforeach
                                    </select>
                                    <div class="invalid-feedback"></div>
                                </div>
                            </div>
                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="id_tag">Tag&nbsp;*</label>
                                </div>
                                <div class="col-sm-9 my-auto">
                                    <select class="form-select form-select-sm" id="id_tag" name="id_tag[]" multiple>
                                        <option value=""></option>
                                        @foreach ($tag as $item)
                                        <option value="{{ $item->id_tag }}" {{ in_array($item->id_tag, $id_tag) ? 'selected' : '' }}>{{ $item->name }}</option>
                                        @endforeach
                                    </select>
                                    <div class="invalid-feedback"></div>
                                </div>
                            </div>
                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="image">Gambar&nbsp;*</label>
                                </div>
                                <div class="col-sm-9 my-auto">
                                    <input type="file" class="form-control form-control-sm" id="image" name="image" disabled />
                                    <div class="form-check form-check-inline mt-1"><input type="checkbox" class="form-check-input" name="change_picture" id="change_picture" onclick="change('change_picture', 'image')"><label class="form-check-label">Ubah File!</label></div>
                                    <p><small class="text-muted">File dengan tipe (*.jpg, *.jpeg, *.png).</small></p>
                                    <div class="invalid-feedback"></div>
                                </div>
                            </div>
                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="content">Konten&nbsp;*</label>
                                </div>
                                <div class="col-sm-9">
                                    <textarea class="form-control form-control-sm" id="content" name="content" placeholder="Masukkan konten">{{ $post->content }}</textarea>
                                    <div class="invalid-feedback"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <a href="{{ route('admin.post.index') }}" class="btn btn-sm btn-relief-danger">
                                        <i data-feather="x"></i>&nbsp;<span>Batal</span>
                                    </a>&nbsp;
                                    <button type="submit" id="save" class="btn btn-sm btn-relief-primary">
                                        <i data-feather="save"></i>&nbsp;<span>Simpan</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end:: content -->

    <!-- begin:: js local -->
    @push('js')
    <script src="{{ asset_admin('vendors/js/forms/select/select2.full.min.js') }}"></script>
    <script src="https://cdn.tiny.cloud/1/1e7071suorrjx5e8l8vbnasbwuu0yhtrqqdsnmtnvit9u0xo/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>

    <script>
        tinymce.init({
            selector: '#content',
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker fullscreen',
            toolbar: 'fullscreen | undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            setup: (editor) => {
                editor.on('change', () => {
                    if (editor.getContent() == '') {
                        $('#content').removeClass('is-valid').addClass('is-invalid');
                    } else {
                        $('#content').removeClass('is-invalid').addClass('is-valid');
                    }
                });
            },
        });

        let untukSimpanData = function() {
            $(document).on('submit', '#form-add-upd', function(e) {
                e.preventDefault();

                $.ajax({
                    method: $(this).attr('method'),
                    url: $(this).attr('action'),
                    data: new FormData(this),
                    contentType: false,
                    processData: false,
                    cache: false,
                    dataType: 'json',
                    beforeSend: function() {
                        $('#form-add-upd').find('input, textarea, select').removeClass('is-valid');
                        $('#form-add-upd').find('input, textarea, select').removeClass('is-invalid');

                        $('#save').attr('disabled', 'disabled');
                        $('#save').html('<i data-feather="refresh-ccw"></i>&nbsp;<span>Menunggu...</span>');
                        feather.replace();
                    },
                    success: function(response) {
                        if (response.type === 'success') {
                            Swal.fire({
                                title: response.title,
                                text: response.text,
                                icon: response.type,
                                confirmButtonText: response.button,
                                customClass: {
                                    confirmButton: `btn btn-sm btn-${response.class}`,
                                },
                                buttonsStyling: false,
                            }).then((value) => {
                                location.reload();
                            });
                        } else {
                            $.each(response.errors, function(key, value) {
                                if (key) {
                                    if (($('#' + key).prop('tagName') === 'INPUT' || $('#' + key).prop('tagName') === 'TEXTAREA')) {
                                        $('#' + key).addClass('is-invalid');
                                        $('#' + key).parents('.field-input').find('.invalid-feedback').html(value);
                                    } else if ($('#' + key).prop('tagName') === 'SELECT') {
                                        $('#' + key).addClass('is-invalid');
                                        $('#' + key).parents('.field-input').find('.invalid-feedback').html(value);
                                    }
                                }
                            });

                            Swal.fire({
                                title: response.title,
                                text: response.text,
                                icon: response.type,
                                confirmButtonText: response.button,
                                customClass: {
                                    confirmButton: `btn btn-sm btn-${response.class}`,
                                },
                                buttonsStyling: false,
                            });
                        }

                        $('#save').removeAttr('disabled');
                        $('#save').html('<i data-feather="save"></i>&nbsp;<span>Simpan</span>');
                        feather.replace();
                    }
                });
            });

            $(document).on('keyup', '#form-add-upd input', function(e) {
                e.preventDefault();

                if ($(this).val() == '') {
                    $(this).removeClass('is-valid').addClass('is-invalid');
                } else {
                    $(this).removeClass('is-invalid').addClass('is-valid');
                }
            });

            $(document).on('keyup', '#form-add-upd textarea', function(e) {
                e.preventDefault();

                if ($(this).val() == '') {
                    $(this).removeClass('is-valid').addClass('is-invalid');
                } else {
                    $(this).removeClass('is-invalid').addClass('is-valid');
                }
            });

            $(document).on('change', '#form-add-upd select', function(e) {
                e.preventDefault();

                if ($(this).val() == '') {
                    $(this).removeClass('is-valid').addClass('is-invalid');
                } else {
                    $(this).removeClass('is-invalid').addClass('is-valid');
                }
            });

            $(document).on('change', '#form-add-upd input[type="file"]', function(e) {
                e.preventDefault();

                if ($(this).val() == '') {
                    $(this).removeClass('is-valid').addClass('is-invalid');
                } else {
                    $(this).removeClass('is-invalid').addClass('is-valid');
                }
            });
        }();

        let untukSelectCategory = function() {
            $("#id_category").select2({
                placeholder: "Pilih kategori",
                width: '100%',
                allowClear: true,
                containerCssClass: 'select-sm',
            });
        }();

        let untukSelectTag = function() {
            $("#id_tag").select2({
                placeholder: "Pilih tag",
                width: '100%',
                allowClear: true,
                containerCssClass: 'select-sm',
            });
        }();
    </script>
    @endpush
    <!-- end:: js local -->
</x-admin-layout>