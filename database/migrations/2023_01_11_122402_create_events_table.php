<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sport_id')->nullable()->constrained()->nullOnDelete();
            $table->string('tournament');
            $table->string('event');
            $table->date('date');
            $table->time('start_time');
            $table->time('end_time');
            $table->string('comment')->nullable();
            $table->enum('status', ['LIVE', 'FINISHED', 'SCHEDULED', 'CANCELED'])->default('CANCELED');
            $table->enum('resolution', ['SD', 'HD', 'FullHD'])->default('HD');
            $table->string('server_id');
            $table->unsignedBigInteger('stream_id');
            $table->string('source')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
};
