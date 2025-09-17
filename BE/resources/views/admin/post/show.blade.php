<x-admin-layout title="{{ $title }}">
    <!-- begin:: css local -->
    @push('css')
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
                        <form class="form form-horizontal mt-2">
                            <!-- begin:: id -->
                            <input type="hidden" name="id_post" id="id_post" />
                            <!-- end:: id -->

                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="title">Judul</label>
                                </div>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control form-control-sm form-control-plaintext" value="{{ $post->title }}" />
                                </div>
                            </div>
                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="id_category">Kategori</label>
                                </div>
                                <div class="col-sm-9 my-auto">
                                    <input type="text" class="form-control form-control-sm form-control-plaintext" value="{{ $post->toCategory->name }}" />
                                </div>
                            </div>
                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="id_tag">Tag</label>
                                </div>
                                <div class="col-sm-9 my-auto">
                                    @foreach ($post->toPostTag as $item)
                                    <span class="badge badge-light-info me-1">{{ $item->toTag->name }}</span>
                                    @endforeach
                                </div>
                            </div>
                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="image">Gambar</label>
                                </div>
                                <div class="col-sm-9 my-auto">
                                    <img src="{{ asset_upload('picture/post/' . $post->image) }}" alt="{{ $post->title }}" class="img-fluid" width="50%" />
                                </div>
                            </div>
                            <div class="field-input mb-1 row">
                                <div class="col-sm-3">
                                    <label class="col-form-label" for="content">Konten</label>
                                </div>
                                <div class="col-sm-9">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="card-text">
                                                {!! $post->content !!}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <a href="{{ route('admin.post.index') }}" class="btn btn-sm btn-relief-danger">
                                        <i data-feather="arrow-left"></i>&nbsp;<span>Kembali</span>
                                    </a>&nbsp;
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
    @endpush
    <!-- end:: js local -->
</x-admin-layout>