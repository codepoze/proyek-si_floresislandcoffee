<x-admin-layout title="{{ $title }}">
    <!-- begin:: css local -->
    @push('css')
    <link rel="stylesheet" type="text/css" href="{{ asset_admin('vendors/css/tables/datatable/dataTables.bootstrap5.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset_admin('vendors/css/tables/datatable/buttons.bootstrap5.min.css') }}">
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
                    <div class="card-datatable">
                        <table class="table table-striped table-bordered" id="tabel-antrean-dt" style="width: 100%;">
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end:: content -->

    <!-- begin:: js local -->
    @push('js')
    <script src="{{ asset_admin('vendors/js/tables/datatable/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/dataTables.bootstrap5.min.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/datatables.checkboxes.min.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/datatables.buttons.min.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/jszip.min.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/pdfmake.min.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/vfs_fonts.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/buttons.html5.min.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/buttons.print.min.js') }}"></script>
    <script src="{{ asset_admin('vendors/js/tables/datatable/dataTables.rowGroup.min.js') }}"></script>

    <script>
        var table;

        let untukTabel = function() {
            table = $('#tabel-antrean-dt').DataTable({
                serverSide: true,
                responsive: true,
                processing: true,
                lengthMenu: [5, 10, 25, 50],
                pageLength: 10,
                language: {
                    emptyTable: "Tak ada data yang tersedia pada tabel ini.",
                    processing: "Data sedang diproses...",
                },
                ajax: "{{ route('admin.antrean.list') }}",
                dom: '<"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
                drawCallback: function() {
                    feather.replace();
                },
                columns: [{
                        title: 'No.',
                        data: 'DT_RowIndex',
                        class: 'text-center'
                    },
                    {
                        title: 'No. Antrean',
                        data: 'no_antrean',
                        class: 'text-center'
                    },
                    {
                        title: 'No. Polisi',
                        data: 'no_pol',
                        class: 'text-center'
                    },
                    {
                        title: 'Metode',
                        data: 'to_metode.nama',
                        class: 'text-center'
                    },
                    {
                        title: 'Distributor',
                        data: 'distributor',
                        class: 'text-center'
                    },
                    {
                        title: 'No. So',
                        data: 'no_so',
                        class: 'text-center'
                    },
                    {
                        title: 'Nama',
                        data: 'nama',
                        class: 'text-center'
                    },
                    {
                        title: 'Tujuan',
                        data: 'tujuan',
                        class: 'text-center'
                    },
                    {
                        title: 'No. HP',
                        data: 'no_hp',
                        class: 'text-center'
                    },
                    {
                        title: 'No. Identitas',
                        data: 'no_identitas',
                        class: 'text-center'
                    },
                    {
                        title: 'Tanggal Daftar',
                        data: 'tanggal',
                        class: 'text-center'
                    },
                    {
                        title: 'Jam Daftar',
                        data: 'jam',
                        class: 'text-center'
                    },
                    {
                        title: 'Status',
                        data: 'status',
                        class: 'text-center'
                    },
                    {
                        title: 'Aksi',
                        data: 'action',
                        className: 'text-center',
                        responsivePriority: -1,
                        orderable: false,
                        searchable: false,
                    },
                ],
            });
        }();

        let untukPanggil = function() {
            $(document).on('click', '#btn-panggil', function() {
                var ini = $(this);

                $.ajax({
                    type: "post",
                    url: "{{ route('admin.antrean.memanggil') }}",
                    dataType: 'json',
                    data: {
                        id: ini.data('id'),
                    },
                    beforeSend: function() {
                        ini.attr('disabled', 'disabled');
                        ini.html('<i data-feather="refresh-ccw"></i>&nbsp;<span>Menunggu...</span>');
                        feather.replace();
                    },
                    success: function(response) {
                        var no_antrean = ini.data('no_antrean');

                        if (response.status) {
                            // Mengambil karakter pertama
                            const karakterPertama = no_antrean.slice(0, 1); // atau kode[0]

                            // Mengambil sisa karakter
                            const sisaKarakter = no_antrean.slice(1);

                            // Menggabungkan kembali dengan spasi
                            const noAntrean = `${karakterPertama}` + ' ' + terbilang(parseInt(sisaKarakter));

                            var text = "Nomor antrian " + noAntrean + ", dipersihlakan menuju loding dock.";

                            speakText(text);

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
                                table.ajax.reload();
                            });
                        } else {
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
                                table.ajax.reload();
                            });
                        }
                    }
                });
            });
        }();

        function speakText(text) {
            let audio = new Audio("{{ asset('audio/opening.mp3') }}");

            audio.onended = function() {
                window.speechSynthesis.cancel();

                let speech = new SpeechSynthesisUtterance();

                speech.text = text;
                speech.lang = 'id-ID';
                speech.pitch = 1;
                speech.rate = 0.9;
                speech.volume = 1;

                speech.onend = function() {
                    console.log('Selesai mengucapkan teks: "' + text + '"');
                };

                speech.onerror = function(event) {
                    console.error('Terjadi kesalahan pada Speech Synthesis:', event.error);
                };

                window.speechSynthesis.speak(speech);
            };

            audio.play();
        }

        function terbilang(n) {
            const satuan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
            if (n < 12) {
                return satuan[n];
            } else if (n < 20) {
                return terbilang(n - 10) + " belas";
            } else if (n < 100) {
                return terbilang(Math.floor(n / 10)) + " puluh " + terbilang(n % 10);
            } else {
                return n.toString(); // Untuk angka besar, kembalikan sebagai string biasa
            }
        }
    </script>
    @endpush
    <!-- end:: js local -->
</x-admin-layout>