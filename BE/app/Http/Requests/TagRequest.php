<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Response;

class TagRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Nama tidak boleh kosong',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            Response::json([
                'title' => 'Gagal!',
                'text' => 'Data Gagal di Simpan!',
                'type' => 'error',
                'button' => 'Okay!',
                'class' => 'danger',
                'errors' => $validator->errors(),
            ])
        );
    }
}
