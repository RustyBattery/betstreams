<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\UserIpAddress;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends BaseController
{
    public function index(Request $request){
        $users = User::query()->leftJoin('personal_access_tokens', 'users.id', '=', 'personal_access_tokens.tokenable_id')
            ->select(
                "users.id",
                "users.name",
                "users.username",
                "users.role",
                "personal_access_tokens.token as token",
            )->get();
        return $users;
    }

    public function create(Request $request){
        $data = $request->validate([
            'name' => ['required', 'string'],
            'username' => ['required', 'string'],
            'email' => ['nullable', 'string'],
            'role' => ['nullable', 'in:client,user,admin'],
            'password' => ['required', 'string'],
            'can_use_api' => ['required', 'boolean'],
        ]);
        $data['password'] = Hash::make($data['password']);
        $user = User::query()->create($data);
        if($data['can_use_api']){
            $user->createToken('api');
        }
        return response()->json(null, 200);
    }

    public function update(Request $request){
        $data = $request->validate([
            'id' => ['required', 'numeric'],
            'name' => ['required', 'string'],
            'username' => ['required', 'string'],
            'email' => ['nullable', 'string'],
            'password' => ['nullable', 'string'],
            'role' => ['nullable', 'in:client,user,admin'],
            'can_use_api' => ['nullable', 'numeric'],
        ]);
//        return $data;
        if(isset($data['password'])){
            $data['password'] = Hash::make($data['password']);
        }
        $user = User::query()->updateOrCreate(['id' => $data['id']], $data);
//        return $user;
        if(isset($data['can_use_api']) && $data['can_use_api']){
            if(!$user->tokens()->count()){
                $user->createToken('api');
            }
        }else{
            $user->tokens()->delete();
        }
        return response()->json(null, 200);
    }

    public function delete(Request $request){
        $data = $request->validate([
            'id' => ['required', 'numeric'],
        ]);
        User::query()->findOrFail($data['id'])->delete();
        return response()->json(null, 200);
    }

    public function get_ip_addresses(Request $request){
        $data = $request->validate([
            'id' => ['required', 'numeric'],
        ]);
        $ip_addresses = UserIpAddress::query()->where('user_id', $data['id'])->get();
        return $ip_addresses;
    }

    public function update_or_create_ip_addresses(Request $request){
        $data = $request->validate([
            'id' => ['nullable', 'numeric'],
            'user_id' => ['required', 'numeric'],
            'value' => ['required', 'string'],
        ]);
        if(!isset($data['id'])){
            $data['id']=null;
        }
        UserIpAddress::query()->updateOrCreate(['id'=>$data['id'], 'user_id'=>$data['user_id']], $data);
        return response()->json(null, 200);
    }

    public function delete_ip_addresses(Request $request){
        $data = $request->validate([
            'id' => ['nullable', 'numeric'],
        ]);
        UserIpAddress::query()->findOrFail($data['id'])->delete();
        return response()->json(null, 200);
    }

    public function profile(){
        $user = $user = auth('sanctum')->user();
        $user->token = $user->tokens()->first()->token;
        $user->ip_list = UserIpAddress::query()->where('user_id', $user->id)->get();
        return $user;
    }
}
