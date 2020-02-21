<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('services','ServiceController@index');
Route::get('services/{id}','ServiceController@show');
Route::post('services', 'ServiceController@saveImg');
Route::post('services/mid', 'ServiceController@saveMidImg');
Route::post('services/gallery1', 'ServiceController@saveGalleryImg1');
Route::post('services/gallery2', 'ServiceController@saveGalleryImg2');
Route::post('services/gallery3', 'ServiceController@saveGalleryImg3');
Route::post('services/gallery4', 'ServiceController@saveGalleryImg4');
Route::post('services/gallery5', 'ServiceController@saveGalleryImg5');
Route::post('services/add','ServiceController@add');
Route::put('services/{id}','ServiceController@update');
Route::delete('services/{id}','ServiceController@delete');

Route::get('forms','FormController@index');
Route::get('forms/{id}','FormController@show');
Route::post('forms/add','FormController@add');