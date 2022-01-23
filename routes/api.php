<?php

use App\Http\Controllers\FoodController;
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

//Route::get('/food',[FoodController::class,'index']);
Route::post('/modify',[FoodController::class,'update']);
Route::post('/add',[FoodController::class,'create']);
Route::post('/del',[FoodController::class,'delete']);
//Route::post('/stripe-payment', [Stripe::class, 'pay']);
