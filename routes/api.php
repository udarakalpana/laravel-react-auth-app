<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/sign-in', function () {
    return ['hello' => 'world'];
});
