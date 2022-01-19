<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\Servico;
use Illuminate\Http\Request;

class ServicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $servicos = Servico::all();
        return response()->json($servicos);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        //Criar um serviço com try and catch
        $data = $request->all();
//        return response()->json($data);
        try {
            $servico = Servico::create($data);

            return response()->json($servico);

        } catch (\Exception $e) {

            return response()->json($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Servico  $servico
     * @return \Illuminate\Http\JsonResponse
     */
    public function showClienteServicos ($id)
    {
        $servicos = Cliente::find($id)->servicos;
        return response()->json($servicos);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Servico  $servico
     * @return \Illuminate\Http\Response
     */
    public function edit(Servico $servico)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Servico  $servico
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Servico $servico)
    {
        //
    }

    public function updateStatus(Request $request)
    {
        $data = $request->all();
        $servico = Servico::find($data['id']);
        if ($servico->status == 'Em Aberto') {
            $servico->status = 'Pago';
            $servico->save();
            return response()->json($servico);
        } else {
            $servico->status = 'Em Aberto';
            $servico->save();
            return response()->json($servico);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Servico  $servico
     * @return \Illuminate\Http\Response
     */
    public function destroy(Servico $servico)
    {
        //
    }
}
