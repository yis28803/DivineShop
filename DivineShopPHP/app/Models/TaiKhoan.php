<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaiKhoan extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $primaryKey = 'id'; 
    public $timestamps = false;
    // protected $fillable = ['name_dm', 'bieutuong'];

    
}
