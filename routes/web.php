<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::inertia('/login', 'Login')->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/', function (){
        return Inertia::render('Events', ['authUser'=> auth('sanctum')->user(), 'app_name' => env('APP_NAME')]);
    });
    Route::get('/profile', function (){
        return Inertia::render('Profile', ['authUser'=> auth('sanctum')->user(), 'app_name' => env('APP_NAME')]);
    });
    Route::get('/users', function (){
        return Inertia::render('Users', ['authUser'=> auth('sanctum')->user(), 'app_name' => env('APP_NAME')]);
    });
});
