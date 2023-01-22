<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/sports', [\App\Http\Controllers\Api\EventController::class, 'get_sports']);
Route::get('/', [\App\Http\Controllers\Api\EventController::class, 'get']);

//Route::group(['middleware' => 'auth:sanctum'], function(){
Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/statistics', [\App\Http\Controllers\Api\EventController::class, 'export_statistics']);
    Route::prefix('/events')->group(function () {
        Route::post('/', [\App\Http\Controllers\Api\EventController::class, 'index']);
        Route::post('/add', [\App\Http\Controllers\Api\EventController::class, 'create']);
        Route::post('/edit', [\App\Http\Controllers\Api\EventController::class, 'update']);
        Route::post('/delete', [\App\Http\Controllers\Api\EventController::class, 'delete']);
        Route::post('/client/edit', [\App\Http\Controllers\Api\EventController::class, 'edit_client']);
        Route::post('/comments', [\App\Http\Controllers\Api\EventController::class, 'get_comments']);
        Route::get('/new', [\App\Http\Controllers\Api\EventController::class, 'check_new']);
        Route::get('/servername', [\App\Http\Controllers\Api\EventController::class, 'get_server_name']);
        Route::post('/import', [\App\Http\Controllers\Api\EventController::class, 'import_events']);
    });
    Route::prefix('/users')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\UserController::class, 'index']);
        Route::get('/profile', [\App\Http\Controllers\Api\UserController::class, 'profile']);
        Route::post('/add', [\App\Http\Controllers\Api\UserController::class, 'create']);
        Route::post('/edit', [\App\Http\Controllers\Api\UserController::class, 'update']);
        Route::post('/delete', [\App\Http\Controllers\Api\UserController::class, 'delete']);
        Route::post('/ip', [\App\Http\Controllers\Api\UserController::class, 'get_ip_addresses']);
        Route::post('/ip/edit', [\App\Http\Controllers\Api\UserController::class, 'update_or_create_ip_addresses']);
        Route::post('/ip/delete', [\App\Http\Controllers\Api\UserController::class, 'delete_ip_addresses']);
    });
    Route::prefix('/conf')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\ConfigController::class, 'index']);
        Route::post('/edit', [\App\Http\Controllers\Api\ConfigController::class, 'update']);
    });
});
