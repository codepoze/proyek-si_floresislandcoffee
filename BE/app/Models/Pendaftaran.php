<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pendaftaran extends Model
{
    use HasFactory;
    // table
    protected $table = 'pendaftaran';
    // primary key
    protected $primaryKey = 'id_pendaftaran';
    // fields
    protected $fillable = [
        'id_metode',
        'id_distributor',
        'no_antrean',
        'no_pol',
        'no_so',
        'nama',
        'tujuan',
        'no_hp',
        'no_identitas',
        'status',
    ];

    public function toMetode()
    {
        return $this->belongsTo(Metode::class, 'id_metode', 'id_metode');
    }

    public function toDistributor()
    {
        return $this->belongsTo(Distributor::class, 'id_distributor', 'id_distributor');
    }

    public function toPendaftaranProduk()
    {
        return $this->hasMany(PendaftaranProduk::class, 'id_pendaftaran', 'id_pendaftaran');
    }

    public function toUser()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    // booted
    protected static function booted()
    {
        static::creating(function ($row) {
            $row->created_by = auth()->user()->id;
        });

        static::updating(function ($row) {
            $row->updated_by = auth()->user()->id;
        });
    }
}
