<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Surat Perintah Pengiriman Barang</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 10px;
        }

        .header {
            width: 100%;
            margin-bottom: 10px;
        }

        .header td {
            border: none;
            vertical-align: top;
        }

        .queue-number {
            text-align: right;
        }

        .queue-box {
            border: 3px solid #000;
            text-align: center;
            padding: 5px 5px;
            display: inline-block;
        }

        .queue-label {
            font-size: 10px;
            font-weight: bold;
        }

        .queue-number-text {
            font-size: 26px;
            font-weight: bold;
        }

        .section-title {
            text-align: center;
            font-weight: bold;
            font-size: 13px;
            margin: 10px 0;
        }

        table.product {
            width: 100%;
            border-collapse: collapse;
        }

        table.product th {
            text-align: center;
        }

        table.product td {
            text-align: center;
            padding: 0px;
        }

        td,
        th {
            border: 1px solid black;
            padding: 5px;
        }

        .no-border td {
            border: none;
            padding: 1px;
        }

        .signature {
            width: 100%;
        }

        .signature td {
            border: none;
            text-align: center;
            height: 80px;
        }
    </style>
</head>

<body>
    <table class="header">
        <tr>
            <td>
                <strong style="font-size: 12px;">PT. MACCON GENERASI MANDIRI<br>BATA RINGAN & PANEL, LANTAI AAC</strong>
            </td>
            <td class="queue-number">
                <div class="queue-box">
                    <div class="queue-label">No. Antrean</div>
                    <div class="queue-number-text">{{ $pendaftaran->no_antrean }}</div>
                </div>
            </td>
        </tr>
    </table>

    <div class="section-title">SURAT PERINTAH PENGIRIMAN BARANG</div>

    <table class="no-border">
        <tr>
            <td><strong>NO. SO / AR</strong></td>
            <td>{{ $pendaftaran->no_so ?? '-' }}</td>
            <td><strong>PELANGGAN / UP. DRIVER</strong></td>
            <td>{{ $pendaftaran->nama ?? '-' }}</td>
        </tr>
        <tr>
            <td><strong>TANGGAL SPBB</strong></td>
            <td>{{ tgl_indo($pendaftaran->created_at) }}</td>
            <td><strong>SUB DIS / DISTRIBUTOR</strong></td>
            <td>{{ $pendaftaran->toDistributor->nama ?? '-' }}</td>
        </tr>
        <tr>
            <td><strong>NO. URUT</strong></td>
            <td>{{ $pendaftaran->no_antrean }}</td>
            <td><strong>NO. POLISI</strong></td>
            <td>{{ $pendaftaran->no_pol ?? '-' }}</td>
        </tr>
        <tr>
            <td><strong>SALES</strong></td>
            <td>{{ $pendaftaran->toUser->name ?? '-' }}</td>
            <td><strong>ALAMAT</strong></td>
            <td>{{ $pendaftaran->tujuan ?? '-' }}</td>
        </tr>
    </table>

    <table class="product">
        <thead>
            <tr>
                <th>PRODUK</th>
                <th>TIPE</th>
                <th>QTY</th>
                <th>SATUAN</th>
                <th>PALET</th>
                <th>REMARK</th>
            </tr>
        </thead>
        <tbody>
            @if ($pendaftaran->toPendaftaranProduk->count() > 0)
            @foreach ($pendaftaran->toPendaftaranProduk as $item)
            <tr>
                <td>{{ $item->toProduk->nama }}</td>
                <td>{{ $item->toProduk->tipe }}</td>
                <td>{{ $item->qty }}</td>
                <td>{{ $item->toProduk->toSatuan->nama }}</td>
                <td>{{ $item->palet ?? '-' }}</td>
                <td>{{ $item->remark ?? '-' }}</td>
            </tr>
            @endforeach
            @else
            <tr>
                <td colspan="6">Tidak ada data</td>
            </tr>
            @endif
        </tbody>
    </table>

    <table class="signature">
        <tr>
            <td>Dibuat Oleh,<br><br><br>(Delivery SPBB)</td>
            <td>Disetujui Oleh,<br><br><br>(Logistik)</td>
        </tr>
    </table>

</body>

</html>