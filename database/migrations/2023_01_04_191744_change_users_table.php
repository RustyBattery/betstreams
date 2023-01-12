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
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')->after('name')->unique();
            $table->enum('role', ['client', 'user', 'admin'])->after('password')->default('client');
            $table->string('email')->after('username')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('email')->after('name')->nullable('false')->change();
            $table->dropColumn('username');
            $table->dropColumn('role');
        });
    }
};
