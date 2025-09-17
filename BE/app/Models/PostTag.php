<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostTag extends Model
{
    protected $table = 'post_tags';
    protected $primaryKey = 'id_post_tag';
    protected $fillable = [
        'id_post',
        'id_tag'
    ];

    public function toTag()
    {
        return $this->belongsTo(Tag::class, 'id_tag');
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
