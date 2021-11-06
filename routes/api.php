<?php

use App\Models\Food;
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

Route::get('/food',[Food::class,'index']);
Route::post('/modify',[Food::class,'update']);
Route::post('/add',[Food::class,'create']);
Route::post('/del',[Food::class,'delete']);
//Route::post('/stripe-payment', [Stripe::class, 'pay']);
