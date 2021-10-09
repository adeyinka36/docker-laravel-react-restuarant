<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Food;

class FoodController extends Controller
{
    public function index(){
        return response()->json(Food::all(),200);
    }

    public function create(Request $req){
        $data = $req->validate([
            "name" => "required",
            "cost" => "required",
            "description" => "required"
        ]);

        return response()->json(Food::create($data),201);

    }

    public function update(Request $req){
        $data = $req->validate([
            "id" => "required"
        ]);
        $data = Food::find($data['id']);

        $data->update();
    }

    public function delete(Request $req){
        $data = $req->validate([
            "id" => "required"
        ]);
        $data = Food::find($data['id']);

        $data->delete();
    }
}
