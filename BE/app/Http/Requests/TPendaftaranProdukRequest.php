<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Response;

class TPendaftaranProdukRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        if ($this->metode == 'add') {
            return [
                'id_produk.*' => 'required',
                'qty.*'       => 'required',
            ];
        }

        if ($this->metode == 'upd') {
            return [
                'id_produk' => 'required',
                'qty'       => 'required',
            ];
        }
    }

    public function messages()
    {
        $messages = [];

        if ($this->metode == 'add') {
            $produkInputs = $this->id_produk;
            $qtyInputs    = $this->qty;

            foreach ($produkInputs as $index => $value) {
                $row = $index + 1;
                $messages["id_produk.$index.required"] = "Produk pada baris ke-$row wajib diisi.";
            }

            foreach ($qtyInputs as $index => $value) {
                $row = $index + 1;
                $messages["qty.$index.required"] = "Qty pada baris ke-$row wajib diisi.";
            }
        }

        if ($this->metode == 'upd') {
            $messages = [
                'id_produk.required' => 'Produk wajib diisi',
                'qty.required'       => 'Qty wajib diisi',
            ];
        }

        return $messages;
    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        // Ubah key dot menjadi underscore
        $formattedErrors = [];
        foreach ($errors as $key => $messages) {
            $newKey = str_replace('.', '_', $key);
            $formattedErrors[$newKey] = $messages;
        }

        $response = ['title' => 'Gagal!', 'text' => 'Data gagal ditambahkan!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger', 'errors' => $formattedErrors];

        throw new HttpResponseException(Response::json($response));
    }
}
