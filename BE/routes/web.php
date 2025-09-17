<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SocialMediaController;
use App\Http\Controllers\Admin\SubscriberController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\VisitorController;
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

    // begin:: social media
    Route::controller(SocialMediaController::class)->prefix('social_media')->as('social_media.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/list', 'list')->name('list');
        Route::post('/show', 'show')->name('show');
        Route::post('/save', 'save')->name('save');
        Route::post('/del', 'del')->name('del');
    });
    // end:: social media

    // begin:: contact
    Route::controller(ContactController::class)->prefix('contact')->as('contact.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/list', 'list')->name('list');
    });
    // end:: contact

    // begin:: subscriber
    Route::controller(SubscriberController::class)->prefix('subscriber')->as('subscriber.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/list', 'list')->name('list');
    });
    // end:: subscriber

    // begin:: visitor
    Route::controller(VisitorController::class)->prefix('visitor')->as('visitor.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/list', 'list')->name('list');
    });
    // end:: visitor

    // begin:: category
    Route::controller(CategoryController::class)->prefix('category')->as('category.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/list', 'list')->name('list');
        Route::post('/show', 'show')->name('show');
        Route::post('/save', 'save')->name('save');
        Route::post('/del', 'del')->name('del');
    });
    // end:: category

    // begin:: tag
    Route::controller(TagController::class)->prefix('tag')->as('tag.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/list', 'list')->name('list');
        Route::post('/show', 'show')->name('show');
        Route::post('/save', 'save')->name('save');
        Route::post('/del', 'del')->name('del');
    });
    // end:: tag

    // begin:: post
    Route::controller(PostController::class)->prefix('post')->as('post.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/list', 'list')->name('list');
        Route::get('/show/{id}', 'show')->name('show');

        Route::get('/create', 'create')->name('create');
        Route::post('/store', 'store')->name('store');

        Route::get('/edit/{id}', 'edit')->name('edit');
        Route::post('/update', 'update')->name('update');
        
        Route::post('/del', 'del')->name('del');
    });
    // end:: post
});
