<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'id_satuan' => 1,
                'nama'      => 'Panel Lantai',
                'tipe'      => 'MPL 272 x 60 x 12,5 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Panel Lantai',
                'tipe'      => 'MPL 222 x 60 x 12,5 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Panel Lantai',
                'tipe'      => 'MPL 147 x 60 x 12,5 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Panel Lantai',
                'tipe'      => 'MPL 247 x 60 x 12,5 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Panel Lantai',
                'tipe'      => 'MPL 197 x 60 x 12,5 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Panel Lantai',
                'tipe'      => 'MPL 297 x 60 x 12,5 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Patah 17.5'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Patah 20'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Patah 15'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Patah 12.5'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Patah 10'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Patah 7.5'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC NS 50 10'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC NS 50 7.5'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC SG 20'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC SG 17.5'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC SG 15'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC SG 12.5'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC SG 10'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC SG 7.5'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MCL 20 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Standar 20'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Standar 17.5'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MCL 15 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Standar 15'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MCL 12.5 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Standar 12.5'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MCL 10 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MCL 7.5 cm'
            ],
            [
                'id_satuan' => 1,
                'nama'      => 'Bata Ringan',
                'tipe'      => 'MAC Standar 7.5'
            ],
        ];

        foreach ($data as $row) {
            DB::table('produk')->insert($row);
        }
    }
}
