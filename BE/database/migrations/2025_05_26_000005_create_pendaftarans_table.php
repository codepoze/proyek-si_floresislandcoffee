<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pendaftaran', function (Blueprint $table) {
            $table->increments('id_pendaftaran');
            $table->integer('id_metode')->unsigned()->nullable();
            $table->integer('id_distributor')->unsigned()->nullable();
            $table->string('no_antrean', 10)->nullable();
            $table->string('no_pol', 15)->nullable();
            $table->string('no_so')->nullable();
            $table->string('nama', 25)->nullable();
            $table->text('tujuan')->nullable();
            $table->string('no_hp', 25)->nullable();
            $table->string('no_identitas', 25)->nullable();
            $table->enum('status', ['menunggu', 'memanggil', 'selesai'])->nullable()->default('menunggu');

            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

            $table->foreign('id_metode')->references('id_metode')->on('metode')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('id_distributor')->references('id_distributor')->on('distributor')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pendaftaran');
    }
};
