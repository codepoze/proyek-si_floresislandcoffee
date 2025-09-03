<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest', 'prevent.back.history')->group(function () {
    Route::get('/', [AuthController::class, 'login'])->name('auth.login');

    Route::post('/check', [AuthController::class, 'check'])->name('auth.check');
});

Route::get('/logout', [AuthController::class, 'logout'])->name('auth.logout');

Route::middleware('auth.session', 'prevent.back.history')->prefix('admin')->as('admin.')->group(function () {
    Route::controller(DashboardController::class)->prefix('dashboard')->as('dashboard.')->group(function () {
        Route::get('/', 'index')->name('index');
    });

    // begin:: akun
    Route::controller(AkunController::class)->prefix('akun')->as('akun.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/save_picture', 'save_picture')->name('save_picture');
        Route::post('/save_account', 'save_account')->name('save_account');
        Route::post('/save_security', 'save_security')->name('save_security');
    });
    // end:: akun
});
