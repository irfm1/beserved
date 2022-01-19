<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servico extends Model
{
    use HasFactory;

    //servico
    protected $table = 'servicos';
    protected $primaryKey = 'id';
    protected $fillable = ['tipo', 'descricao', 'valor', 'status','cliente_id'];


    public function cliente(){
        return $this->belongsTo('App\Models\Cliente');
    }

    //function to return the month of the service
    public function mes(){
        $mes = date('m', strtotime($this->created_at));
        return $mes;
    }





}
