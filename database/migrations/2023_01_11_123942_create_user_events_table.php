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
        Schema::create('user_events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->cascadeOnDelete();
            $table->foreignId('event_id')->nullable()->cascadeOnDelete();
            $table->string('comment')->nullable();
            $table->string('personal_id')->nullable();
            $table->dateTime('trashcan')->nullable();
            $table->dateTime('taken')->nullable();
            $table->dateTime('add_comment')->nullable();
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
        Schema::dropIfExists('user_events');
    }
};
