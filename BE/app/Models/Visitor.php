<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    protected $table = 'visitors';
    protected $primaryKey = 'id_visitor';
    protected $fillable = [
        'ip',
        'city',
        'region',
        'country',
        'loc',
        'org',
        'timezone'
    ];

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
