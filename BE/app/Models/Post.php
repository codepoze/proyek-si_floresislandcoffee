<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
    protected $primaryKey = 'id_post';
    protected $fillable = [
        'id_category',
        'title',
        'content',
        'image',
        'status'
    ];

    public function toCategory()
    {
        return $this->belongsTo(Category::class, 'id_category');
    }

    public function toPostTag()
    {
        return $this->hasMany(PostTag::class, 'id_post');
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
