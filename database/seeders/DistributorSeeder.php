<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DistributorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'nama' => 'MULTI DISTRIBUSI INDONESIA'
            ],
            [
                'nama' => 'PT RAJAWALI ARTHA PERKASA'
            ],
            [
                'nama' => 'BAPAK YANSEN'
            ],
            [
                'nama' => 'IBU FEILY'
            ],
            [
                'nama' => 'PT DINAMIKA ERA PEMBANGUNAN'
            ],
            [
                'nama' => 'BAPAK ABD MUTHALIB'
            ],
            [
                'nama' => 'CV SALMA ANUGRAH ILAHI'
            ],
            [
                'nama' => 'EDI BASO'
            ],
            [
                'nama' => 'PT SAHABAT KARYA SAKTI'
            ],
            [
                'nama' => 'PT MITRA KARYA ABADI SUKSES'
            ],
            [
                'nama' => 'PT MEKAR MAJU JAYA'
            ],
            [
                'nama' => 'PT PRIMA LANGGENG PERKASA'
            ],
            [
                'nama' => 'PT MEGA JAYA MULIA'
            ],
            [
                'nama' => 'IBU ANDAYANI ARIFIN'
            ],
            [
                'nama' => 'IBU SUMARNI'
            ],
            [
                'nama' => 'IBU ANITA'
            ],
            [
                'nama' => 'BAPAK CHRISTIAN'
            ],
            [
                'nama' => 'PT ALFFA MISYA GROUP'
            ],
            [
                'nama' => 'CV KARYA SINAR WAETUO'
            ],
            [
                'nama' => 'H ILHAM'
            ],
            [
                'nama' => 'BAPAK SUPRIYADI'
            ],
            [
                'nama' => 'BAPAK MANSYUR'
            ],
            [
                'nama' => 'IBU HENNI'
            ],
            [
                'nama' => 'PT MORINDO MITRA BINTANG'
            ],
            [
                'nama' => 'MANGGAU JAYA'
            ],
            [
                'nama' => 'BAPAK MUH. WIRYAN'
            ],
            [
                'nama' => 'BLOKTOPIA KONSTRUKSI'
            ],
        ];

        foreach ($data as $row) {
            DB::table('distributor')->insert($row);
        }
    }
}
