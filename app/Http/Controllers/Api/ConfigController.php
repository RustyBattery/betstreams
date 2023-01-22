<?php

namespace App\Http\Controllers\Api;

use App\Exports\ClientStatisticsExport;
use App\Exports\StatisticsExport;
use App\Imports\EventsCollectionImport;
use App\Imports\EventsImport;
use App\Models\Event;
use App\Models\Sport;
use App\Models\User;
use App\Models\UserEvent;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class ConfigController extends BaseController
{
    public function index(){
        $conf = [
            'ip' => env('LINK_IP'),
            'server_name' => env('LINK_SERVER_NAME'),
            'app_name' => env('APP_NAME'),
            'table_size' => env('TABLE_SIZE'),
        ];
        return $conf;
    }
    public function update(Request $request){
        $data = $request->validate([
            'ip' => ['nullable', 'string'],
            'server_name' => ['nullable', 'string'],
            'app_name' => ['nullable', 'string'],
            'table_size' => ['nullable', 'numeric'],
        ]);

        if(isset($data['ip'])){
            $path = base_path('.env');
            $test = file_get_contents($path);
            if (file_exists($path)) {
                file_put_contents($path, str_replace('LINK_IP='.env('LINK_IP'), 'LINK_IP='.$data['ip'], $test));
            }
        }
        if(isset($data['server_name'])){
            $path = base_path('.env');
            $test = file_get_contents($path);
            if (file_exists($path)) {
                file_put_contents($path, str_replace('LINK_SERVER_NAME='.env('LINK_SERVER_NAME'), 'LINK_SERVER_NAME='.$data['server_name'], $test));
            }
        }
        if(isset($data['app_name'])){
            $path = base_path('.env');
            $test = file_get_contents($path);
            if (file_exists($path)) {
                file_put_contents($path, str_replace('APP_NAME='.env('APP_NAME'), 'APP_NAME='.$data['app_name'], $test));
            }
        }
        if(isset($data['table_size'])){
            $path = base_path('.env');
            $test = file_get_contents($path);
            if (file_exists($path)) {
                file_put_contents($path, str_replace('TABLE_SIZE='.env('TABLE_SIZE'), 'TABLE_SIZE='.$data['table_size'], $test));
            }
        }
        return response()->json(null, 200);
    }
}
