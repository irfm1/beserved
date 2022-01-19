<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            //cliente
            $table->id();
            $table->string("nome");
            $table->string("cpf")->unique()->nullable();
            $table->string("cnpj")->unique()->nullable();
            $table->string("razao")->unique()->nullable();
            $table->string("rg")->nullable();
            $table->string("email")->nullable();
            $table->string("telefone")->nullable();
            $table->string("celular");
            $table->string("cep");
            $table->string("endereco");
            $table->string("numero");
            $table->string("complemento")->nullable();
            $table->string("bairro");
            $table->string("cidade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
}
