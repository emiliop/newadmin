<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'title','titlecolor','body','body2','highlighted','image','midimage','background','description','date','product','client','service1','service2','service3','duration','imagegallery1','imagegallery2','imagegallery3','imagegallery4','imagegallery5'
    ];
}
