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

class ApiEvent{
    public $sport = '';
    public $tournament = '';
    public $title = '';
    public $date = '';
    public $startime = '';
    public $endtime = '';
    public $status = '';
    public $quality = '';
    public $streamID = '';
    public $rtmplink = '';

}

class EventController extends BaseController
{
    public function index(Request $request){
        $size = env('TABLE_SIZE', 25);
        $data = $request->validate([
            'filter' => ['nullable', 'string'],
            'sort' => ['nullable', 'string'],
            'filter_date' => ['nullable', 'date'],
        ]);
        $user = auth('sanctum')->user();

        if(!isset($data['filter'])){
            $data['filter']='All';
        }
        if(!isset($data['sort'])){
            $data['sort']='date';
        }

        if($data['filter'] == 'New'){
            $events = Event::query()->join('sports', 'sports.id', '=', 'events.sport_id')->leftJoin('user_events', function ($join) {
                $join->on('events.id', '=', 'user_events.event_id');
            })->orderBy($data['sort'])->orderBy('date')->orderBy('start_time')->select(
                "events.id",
                "events.sport_id",
                "sports.name as sport_name",
                "events.tournament",
                "events.event",
                "events.date",
                "events.start_time",
                "events.end_time",
                "events.comment",
                "events.status",
                "events.resolution",
                "events.server_id",
                "events.stream_id",
                "events.source",
                "events.created_at",
                "user_events.user_id",
                "user_events.comment as client_comment",
                "user_events.add_comment",
                "user_events.personal_id",
                "user_events.trashcan",
                "user_events.taken",
            )->get();
            $black_list = array();
            $events = collect($events)->filter(function ($event) use($user, &$black_list) {
                if($event->user_id == $user->id){
                    array_push($black_list, $event->id);
                }
                return !in_array($event->id, $black_list);
            })->filter(function ($event) use($user, $black_list){
                return !in_array($event->id, $black_list);
            })->map(function ($event) {
                $event = [
                    "id"=>$event->id,
                    "sport_id"=>$event->sport_id,
                    "sport"=>$event->sport_name,
                    "tournament"=>$event->tournament,
                    "event"=>$event->event,
                    "date"=>$event->date,
                    "start_time"=>explode(':', $event->start_time)[0].':'.explode(':', $event->start_time)[1],
                    "end_time"=>explode(':', $event->end_time)[0].':'.explode(':', $event->end_time)[1],
                    "comment"=>$event->comment,
                    "status"=>$event->status,
                    "resolution"=>$event->resolution,
                    "server_id"=>$event->server_id,
                    "stream_id"=>$event->stream_id,
                    "source"=>$event->source,
                    "new"=>true,
                    "recently"=> Carbon::create($event->created_at) > Carbon::now()->subHour() ? 1 : 0
                ];
                return $event;
            })->chunk($size);

            return $events;
        }

        if($data['filter'] == 'Trashcan'){
            $events = Event::query()->join('sports', 'sports.id', '=', 'events.sport_id')->leftJoin('user_events', function ($join) {
                $join->on('events.id', '=', 'user_events.event_id');
            })->orderBy($data['sort'])->orderBy('start_time')->where('user_events.user_id', $user->id)->whereNotNull('user_events.trashcan')->select(
                "events.id",
                "events.sport_id",
                "sports.name as sport_name",
                "events.tournament",
                "events.event",
                "events.date",
                "events.start_time",
                "events.end_time",
                "events.comment",
                "events.status",
                "events.resolution",
                "events.server_id",
                "events.stream_id",
                "events.source",
                "events.created_at",
                "user_events.comment as client_comment",
                "user_events.add_comment",
                "user_events.personal_id",
                "user_events.trashcan",
                "user_events.taken",
                "user_events.statistics",
            )->get();
            $events = collect($events)->map(function ($event){
                $event->start_time = explode(':', $event->start_time)[0].':'.explode(':', $event->start_time)[1];
                $event->end_time = explode(':', $event->end_time)[0].':'.explode(':', $event->end_time)[1];
                $event->recently = Carbon::create($event->created_at) > Carbon::now()->subHour() ? 1 : 0;
                return $event;
            })->chunk($size);

            return $events;
        }

        if($data['filter'] == 'All'){
            $events = Event::query()->orderBy($data['sort'])->orderBy('start_time')->get();
            $events = collect($events)->map(function ($event) use ($user){
                $user_events = UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->first();
                $event = [
                    "id"=>$event->id,
                    "sport_id"=>$event->sport_id,
                    "sport"=>Sport::query()->findOrFail($event->sport_id)->name,
                    "tournament"=>$event->tournament,
                    "event"=>$event->event,
                    "date"=>$event->date,
                    "start_time"=>explode(':', $event->start_time)[0].':'.explode(':', $event->start_time)[1],
                    "end_time"=>explode(':', $event->end_time)[0].':'.explode(':', $event->end_time)[1],
                    "comment"=>$event->comment,
                    "status"=>$event->status,
                    "resolution"=>$event->resolution,
                    "server_id"=>$event->server_id,
                    "stream_id"=>$event->stream_id,
                    "source"=>$event->source,
                    "client_comment"=>$user_events->comment ?? null,
                    "add_comment"=>$user_events->add_comment ?? null,
                    "personal_id"=>$user_events->personal_id ?? null,
                    "trashcan"=>$user_events->trashcan ?? null,
                    "taken"=>$user_events->taken ?? null,
                    "statistics"=>$user_events->statistics ?? null,
                    "new" => UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->count() >0 ? false : true,
                    "recently"=> Carbon::create($event->created_at) > Carbon::now()->subHour() ? 1 : 0,
                ];
                return $event;
            })->filter(function ($event) use($user){
                return !$event['trashcan'];
            })->chunk($size);
            return $events;
        }

        if($data['filter'] == 'Active'){
            $events = Event::query()->orderBy($data['sort'])->where('status', '<>', 'FINISHED')->orderBy('start_time')->get();
            $events = collect($events)->map(function ($event) use ($user){
                $user_events = UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->first();
                $event = [
                    "id"=>$event->id,
                    "sport_id"=>$event->sport_id,
                    "sport"=>Sport::query()->findOrFail($event->sport_id)->name,
                    "tournament"=>$event->tournament,
                    "event"=>$event->event,
                    "date"=>$event->date,
                    "start_time"=>explode(':', $event->start_time)[0].':'.explode(':', $event->start_time)[1],
                    "end_time"=>explode(':', $event->end_time)[0].':'.explode(':', $event->end_time)[1],
                    "comment"=>$event->comment,
                    "status"=>$event->status,
                    "resolution"=>$event->resolution,
                    "server_id"=>$event->server_id,
                    "stream_id"=>$event->stream_id,
                    "source"=>$event->source,
                    "client_comment"=>$user_events->comment ?? null,
                    "add_comment"=>$user_events->add_comment ?? null,
                    "personal_id"=>$user_events->personal_id ?? null,
                    "trashcan"=>$user_events->trashcan ?? null,
                    "taken"=>$user_events->taken ?? null,
                    "statistics"=>$user_events->statistics ?? null,
                    "new" => UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->count() >0 ? false : true,
                    "recently"=> Carbon::create($event->created_at) > Carbon::now()->subHour() ? 1 : 0,
                ];
                return $event;
            })->filter(function ($event) use($user){
                return !$event['trashcan'];
            })->chunk($size);
            return $events;
        }

        if(isset($data['filter_date']) && $data['filter']=='Date' && $data['filter_date']){
            $events = Event::query()->where('date', $data['filter_date'])->orderBy($data['sort'])->orderBy('start_time')->get();
            $events = collect($events)->map(function ($event) use ($user){
                $user_events = UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->first();
                $event = [
                    "id"=>$event->id,
                    "sport_id"=>$event->sport_id,
                    "sport"=>Sport::query()->findOrFail($event->sport_id)->name,
                    "tournament"=>$event->tournament,
                    "event"=>$event->event,
                    "date"=>$event->date,
                    "start_time"=>explode(':', $event->start_time)[0].':'.explode(':', $event->start_time)[1],
                    "end_time"=>explode(':', $event->end_time)[0].':'.explode(':', $event->end_time)[1],
                    "comment"=>$event->comment,
                    "status"=>$event->status,
                    "resolution"=>$event->resolution,
                    "server_id"=>$event->server_id,
                    "stream_id"=>$event->stream_id,
                    "source"=>$event->source,
                    "client_comment"=>$user_events->comment ?? null,
                    "add_comment"=>$user_events->add_comment ?? null,
                    "personal_id"=>$user_events->personal_id ?? null,
                    "trashcan"=>$user_events->trashcan ?? null,
                    "taken"=>$user_events->taken ?? null,
                    "statistics"=>$user_events->statistics ?? null,
                    "new" => UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->count() >0 ? false : true,
                    "recently" => Carbon::create($event->created_at) > Carbon::now()->subHour() ? 1 : 0
                ];
                return $event;
            })->filter(function ($event) use($user){
                return !$event['trashcan'];
            })->chunk($size);
            return $events;
        }

        if($data['filter']){
            $events = Event::query()->orderBy($data['sort'])->orderBy('start_time')->get();
            $events = collect($events)->where('status', $data['filter'])->map(function ($event) use ($user){
                $user_events = UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->first();
                $event = [
                    "id"=>$event->id,
                    "sport_id"=>$event->sport_id,
                    "sport"=>Sport::query()->findOrFail($event->sport_id)->name,
                    "tournament"=>$event->tournament,
                    "event"=>$event->event,
                    "date"=>$event->date,
                    "start_time"=>explode(':', $event->start_time)[0].':'.explode(':', $event->start_time)[1],
                    "end_time"=>explode(':', $event->end_time)[0].':'.explode(':', $event->end_time)[1],
                    "comment"=>$event->comment,
                    "status"=>$event->status,
                    "resolution"=>$event->resolution,
                    "server_id"=>$event->server_id,
                    "stream_id"=>$event->stream_id,
                    "source"=>$event->source,
                    "client_comment"=>$user_events->comment ?? null,
                    "add_comment"=>$user_events->add_comment ?? null,
                    "personal_id"=>$user_events->personal_id ?? null,
                    "trashcan"=>$user_events->trashcan ?? null,
                    "taken"=>$user_events->taken ?? null,
                    "statistics"=>$user_events->statistics ?? null,
                    "new" => UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->count() >0 ? false : true,
                    "recently" => Carbon::create($event->created_at) > Carbon::now()->subHour() ? 1 : 0
                ];
                return $event;
            })->filter(function ($event) use($user){
                return !$event['trashcan'];
            })->chunk($size);
            return $events;
        }

        $events = Event::all();
        return $events;
    }

    public function create(Request $request){
        $data = $request->validate([
            'sport_id' => ['required', 'numeric'],
            'tournament' => ['required', 'string'],
            'event' => ['required', 'string'],
            'date' => ['required', 'date'],
            'start_time' => ['required', 'date_format:H:i'],
            'end_time' => ['required', 'date_format:H:i'],
            'comment' => ['nullable', 'string'],
            'status' => ['required', 'in:LIVE,FINISHED,SCHEDULED,CANCELED'],
            'resolution' => ['required', 'in:SD,HD,FullHD'],
            'server_id' => ['required', 'string'],
            'stream_id' => ['nullable', 'numeric', 'min:10000', 'max:100000000'],
            'source' => ['nullable', 'string'],
        ]);
        if(!$data['stream_id']){
            $data['stream_id']=rand(10000, 100000000);
        }
        $event = Event::query()->where('stream_id', $data['stream_id'])->first();
        if($event){
            return response()->json('This stream_id is already exists', 400);
        }

        $sport = Sport::query()->find($data['sport_id']);
        if(!$sport){
            return response()->json('This sport is not exists', 400);
        }
        $event = Event::query()->create($data);
        return response()->json(null, 200);
    }

    public function update(Request $request){
        $data = $request->validate([
            'id' => ['required', 'numeric'],
            'sport_id' => ['required', 'numeric'],
            'tournament' => ['required', 'string'],
            'event' => ['required', 'string'],
            'date' => ['required', 'date'],
            'start_time' => ['required', 'date_format:H:i'],
            'end_time' => ['required', 'date_format:H:i'],
            'comment' => ['nullable', 'string'],
            'status' => ['required', 'in:LIVE,FINISHED,SCHEDULED,CANCELED'],
            'resolution' => ['required', 'in:SD,HD,FullHD'],
            'server_id' => ['required', 'string'],
            'stream_id' => ['required', 'numeric', 'min:10000', 'max:100000000'],
            'source' => ['nullable', 'string'],
        ]);
        $event = Event::query()->updateOrCreate(['id'=>$data['id']], $data);
        return response()->json(null, 200);
    }

    public function delete(Request $request){
        $data = $request->validate([
            'id' => ['required', 'numeric'],
        ]);
        Event::query()->findOrFail($data['id'])->delete();
        return response()->json(null, 200);
    }

    public function check_new(){
//        $user = auth('sanctum')->user();
//        $events = Event::query()->count();
//        $check_events = $user->statistics()->count();
//        return $events-$check_events;
        $events = Event::query()->where('created_at', '>', Carbon::now()->subSeconds(15))->count();
        return $events;
    }

    public function get_comments(Request $request){
        $data = $request->validate([
            'id' => ['required', 'numeric'],
        ]);

        $user = auth('sanctum')->user();
        if($user->role != 'client');
        $comments = UserEvent::query()->leftJoin('users', 'users.id', '=', 'user_events.user_id')
            ->where('user_events.event_id', $data['id'])->whereNotNull('user_events.comment')
            ->select(
            "users.id",
            "users.username",
            "user_events.comment",
            "user_events.add_comment"
        )->get();

        return $comments;
    }

    public function edit_client(Request $request){
        $data = $request->validate([
            'comment' => ['nullable', 'string'],
            'add_comment' => ['nullable', 'date'],
            'event_id' => ['nullable', 'numeric'],
            'personal_id' => ['nullable', 'string'],
            'trashcan' => ['nullable', 'boolean'],
            'taken' => ['nullable', 'boolean'],
            'statistics' => ['nullable', 'boolean'],
        ]);
        $data['user_id'] = auth('sanctum')->user()->id;
        if(isset($data['add_comment']) && !isset($data['comment'])){
            $data['add_comment']=null;
        }
        if(isset($data['trashcan'])){
            if($data['trashcan']){
                $data['trashcan'] = Carbon::now();
            }
            else{
                $data['trashcan'] = null;
            }
        }
        if(isset($data['taken'])){
            if($data['taken']){
                $data['taken'] = Carbon::now();
            }
            else{
                $data['taken'] = null;
            }
        }
        UserEvent::query()->updateOrCreate(['user_id'=>$data['user_id'], 'event_id'=>$data['event_id']], $data);
        return response()->json(null, 200);
    }

    public function get_server_name(Request $request){
        return env('EVENT_SERVER_NAME', 'ServerName');
    }

    public function import_events(Request $request){
        Excel::import(new EventsImport(), request()->file('events'));
    }

    public function export_statistics(Request $request){
        $data = $request->validate([
            'user_id' => ['nullable', 'numeric'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date'],
            'taken' => ['required', 'boolean'],
            'comment' => ['required', 'boolean'],
        ]);
        if(isset($data['user_id'])){
            return Excel::download(new ClientStatisticsExport($data['user_id'], $data['start_date'], $data['end_date'], $data['taken'], $data['comment']), 'statistics.xlsx');
        }
        return Excel::download(new StatisticsExport($data['start_date'], $data['end_date'], $data['taken'], $data['comment']), 'statistics.xlsx');
    }

    public function get(Request $request){
        $data = $request->validate([
            'token' => ['required', 'string'],
            'date' => ['nullable', 'string'],
            'sport' => ['nullable', 'string'],
            'tournament' => ['nullable', 'string'],
            'event' => ['nullable', 'string'],
        ]);
        if(!DB::table('personal_access_tokens')->where('token', $data['token'])->count()){
            return response()->json('Invalid token, 401');
        }
        unset($data["token"]);
        if(isset($data['date'])){
            if($data['date'] == 'now'){
                $data['date'] = Carbon::now();
            }
            else{
                $data['date'] = Carbon::create($data['date']);
            }
            $data['date'] = $data['date']->format('Y-m-d');
        }
        if(isset($data['sport'])){
            $data['name'] = $data['sport'];
            unset($data["sport"]);
        }
        $events = Event::query()->join('sports', 'sports.id', '=', 'events.sport_id')
            ->where($data)->get();

        $events = $events->collect($events)->map(function ($event){
            $res = new ApiEvent();
            $res->sport = $event->name;
            $res->tournament = $event->tournament;
            $res->title = $event->event;
            $res->date = Carbon::create($event->date)->format('d.m.Y');
            $res->startime = Carbon::create($event->start_time)->format('H:i');
            $res->endtime = Carbon::create($event->end_time)->format('H:i');
            $res->status = $event->status;
            $res->quality = $event->resolution;
            $res->streamID = $event->stream_id;
            $res->rtmplink = 'rtmp://192:168:0:1:1936/'.env('EVENT_SERVER_NAME', 'ServerName').'/'.$event->stream_id;
            return $res;
        });

        return $events;
    }
}
