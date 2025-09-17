<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Libraries\Template;
use App\Models\Category;
use App\Models\Post;
use App\Models\PostTag;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Yajra\DataTables\Facades\DataTables;

class PostController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Post', 'post', 'view');
    }

    public function list()
    {
        $data = Post::with(['toCategory'])->latest()->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                return '
                    <a href="' . route('admin.post.show', my_encrypt($row->id_post)) . '" class="btn btn-info btn-sm"><i data-feather="info"></i>&nbsp;<span>Detail</span></a>&nbsp;
                    <a href="' . route('admin.post.edit', my_encrypt($row->id_post)) . '" class="btn btn-primary btn-sm"><i data-feather="edit"></i>&nbsp;<span>Ubah</span></a>&nbsp;
                    <button type="button" id="del" data-id="' . my_encrypt($row->id_post) . '" class="btn btn-danger btn-sm"><i data-feather="trash"></i>&nbsp;<span>Hapus</span></button>
                ';
            })
            ->rawColumns(['action'])
            ->make(true);
    }

    public function create()
    {
        $data = [
            'category' => Category::latest()->get(),
            'tag'      => Tag::latest()->get(),
        ];

        return Template::load('admin', 'Tambah Post', 'post', 'create', $data);
    }

    public function store(Request $request)
    {
        try {
            $image = add_picture($request->image, 'post');

            $post              = new Post();
            $post->id_category = $request->id_category;
            $post->title       = $request->title;
            $post->content     = $request->content;
            $post->image       = $image;
            $post->save();

            foreach ($request->id_tag as $tag) {
                $post_tag = new PostTag();
                $post_tag->id_post = $post->id_post;
                $post_tag->id_tag  = $tag;
                $post_tag->save();
            }

            $response = ['title' => 'Berhasil!', 'text' => 'Data Sukses di Simpan!', 'type' => 'success', 'button' => 'Okay!', 'class' => 'success'];
        } catch (\Exception $e) {
            $response = ['title' => 'Gagal!', 'text' => 'Data Gagal di Simpan!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger'];
        }

        return Response::json($response);
    }

    public function show($id)
    {
        $post = Post::with(['toPostTag.toTag'])->find(my_decrypt($id));

        $data = [
            'post' => $post,
        ];

        return Template::load('admin', 'Post', 'post', 'show', $data);
    }

    public function edit($id)
    {
        $post     = Post::with(['toPostTag.toTag'])->find(my_decrypt($id));
        $category = Category::latest()->get();
        $tag      = Tag::latest()->get();

        $id_tag = [];
        foreach ($post->toPostTag as $item) {
            $id_tag[] = $item->id_tag;
        }

        $data = [
            'post'     => $post,
            'category' => $category,
            'tag'      => $tag,
            'id_tag'   => $id_tag,
        ];

        return Template::load('admin', 'Post', 'post', 'edit', $data);
    }

    public function update(Request $request)
    {
        try {
            $post              = Post::find($request->id_post);
            $post->id_category = $request->id_category;
            $post->title       = $request->title;
            $post->content     = $request->content;

            if (isset($request->change_picture) && $request->change_picture === 'on') {
                $gambar = upd_picture($request->image, $post->image, 'post');

                $post->image = $gambar;
            }

            $post->save();

            $post_tag = PostTag::where('id_post', $post->id_post)->delete();

            foreach ($request->id_tag as $tag) {
                $post_tag = new PostTag();
                $post_tag->id_post = $request->id_post;
                $post_tag->id_tag  = $tag;
                $post_tag->save();
            }

            $response = ['title' => 'Berhasil!', 'text' => 'Data Sukses di Simpan!', 'type' => 'success', 'button' => 'Okay!', 'class' => 'success'];
        } catch (\Exception $e) {
            $response = ['title' => 'Gagal!', 'text' => 'Data Gagal di Simpan!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger'];
        }

        return Response::json($response);
    }

    public function del(Request $request)
    {
        $checking = is_valid_user($this->session->id, $request->password);
        if ($checking) {
            try {
                $data = Post::find(my_decrypt($request->id));

                $data->delete();

                $response = ['title' => 'Berhasil!', 'text' => 'Data Sukses di Hapus!', 'type' => 'success', 'button' => 'Ok!', 'class' => 'success'];
            } catch (\Exception $e) {
                $response = ['title' => 'Gagal!', 'text' => 'Data Gagal di Hapus!', 'type' => 'error', 'button' => 'Ok!', 'class' => 'danger'];
            }
        } else {
            $response = ['title' => 'Maaf!', 'text' => 'Password Anda Salah!', 'type' => 'warning', 'button' => 'Ok!', 'class' => 'warning'];
        }
        return Response::json($response);
    }
}
