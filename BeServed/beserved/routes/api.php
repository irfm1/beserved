<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/ver/usuarios', [App\Http\Controllers\UsuarioController::class, 'index']);
Route::post('/register', [App\Http\Controllers\UsuarioController::class, 'create']);
Route::post('/delete/{id}', [App\Http\Controllers\UsuarioController::class, 'destroy']);

Route::post('/criar/cliente', [App\Http\Controllers\ClienteController::class, 'store']);
Route::get('/ver/clientes', [App\Http\Controllers\ClienteController::class, 'index']);


Route::post('/criar/servico', [App\Http\Controllers\ServicoController::class, 'store']);
Route::get('/ver/{id}/servicos', [App\Http\Controllers\ServicoController::class, 'showClienteServicos']);
Route::get('/ver/servicos', [App\Http\Controllers\ServicoController::class, 'index']);
Route::put('/mudar/servico/status', [App\Http\Controllers\ServicoController::class, 'updateStatus']);
