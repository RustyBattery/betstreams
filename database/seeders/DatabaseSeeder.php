<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Sport;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::query()->create(['name'=>'client', 'username'=>'client', 'role'=>'client', 'password'=>Hash::make('client')]);
        User::query()->create(['name'=>'user', 'username'=>'user', 'role'=>'user', 'password'=>Hash::make('user')]);
        User::query()->create(['name'=>'admin', 'username'=>'admin', 'role'=>'admin', 'password'=>Hash::make('admin')]);

        $sports = [
            "Football",
            "Hockey",
            "Table tennis",
            "Tennis",
            "Padel tennis",
            "Basketball",
            "Volleyball",
            "Esports",
            "American Football",
            "Handball",
            "Winter sports",
            "Darts",
            "Rugby",
            "Snooker",
            "Floorball",
            "Futsal",
            "Bandy",
            "Beach volleyball",
            "Badminton",
            "Beach soccer",
            "Other"
        ];

        foreach ($sports as $sport){
            Sport::query()->create(['name'=>$sport]);
        }

    }
}
