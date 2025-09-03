<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Response;

class SliderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [];

        if ($this->id_slider === null) {
            $rules['judul']     = 'required';
            $rules['deskripsi'] = 'required';
            $rules['gambar']    = 'required|image|mimes:jpeg,png,jpg,gif|max:2048';
        } else {
            $rules['judul']     = 'required';
            $rules['deskripsi'] = 'required';

            if (isset($this->change_picture) && $this->change_picture === 'on') {
                $rules['gambar'] = 'required|image|mimes:jpeg,png,jpg,gif|max:2048';
            }
        }

        return $rules;
    }

    public function messages(): array
    {
        return [
            'judul.required'     => 'Judul wajib diisi',
            'deskripsi.required' => 'Deskripsi wajib diisi',
            'gambar.required'    => 'Gambar wajib diisi',
            'gambar.image'       => 'Gambar harus berupa gambar',
            'gambar.mimes'       => 'Gambar harus berupa *.jpg,*.jpeg,*.png,*.gif',
            'gambar.max'         => 'Gambar maksimal 2MB',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $response = ['title' => 'Gagal!', 'text' => 'Data gagal ditambahkan!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger', 'errors' => $validator->errors()];

        throw new HttpResponseException(Response::json($response));
    }
}
