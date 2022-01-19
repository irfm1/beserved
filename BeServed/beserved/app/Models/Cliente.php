<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;
    //Cliente em portugues
    protected $table = 'clientes';
    protected $primaryKey = 'id';
    protected $fillable = ['nome', 'email', 'telefone', 'celular',
        'cpf', 'rg', 'cnpj', 'razao', 'endereco', 'numero', 'bairro',
        'cidade', 'estado', 'cep', 'complemento', 'created_at', 'updated_at'];

    public function servicos()
    {
        return $this->hasMany('App\Models\Servico');
    }

}
