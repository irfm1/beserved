<?php

namespace App\Http\Controllers;

use App\Models\User;
use http\Env\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class UsuarioController extends Controller
{
    function index()
    {
        $usuarios = User::all();
        return response()->json($usuarios);
    }
    function create(Request $request)
    {
        $data = $request->all();
        try{
            User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'api_token' => Str::random(60),
            ]);
            $response = [
                'Successes' => true
            ];
            return response()->json($response, ResponseAlias::HTTP_CREATED);
        }Catch(\Exception $e){

            $response = [
                'error' => true,
                'message' => $e->getMessage()
            ];
            return response()->json($response, ResponseAlias::HTTP_BAD_REQUEST);
        }

    }
    function destroy($id)
    {
        $usuario = User::find($id);
        if($usuario){
            $usuario->delete();
            $response = [
                'Successes' => true
            ];
            return response()->json($response, ResponseAlias::HTTP_OK);
        }else{
            $response = [
                'Successes' => false
            ];
            return response()->json($response, ResponseAlias::HTTP_NOT_FOUND);
        }
    }
}
