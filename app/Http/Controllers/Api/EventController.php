<?php

namespace App\Http\Controllers\Api;

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

class EventController extends BaseController
{
    public function index(Request $request){
        $size=3;
        $data = $request->validate([
            'filter' => ['nullable', 'string'],
            'sort' => ['nullable', 'string'],
            'filter_date' => ['nullable', 'date'],
        ]);
        $user = auth('sanctum')->user();
        return $request;
        if(!isset($data['filter'])){
            $data['filter']='All';
        }
        if(!isset($data['sort'])){
            $data['sort']='date';
        }

        if($data['filter'] == 'New'){
            $events = Event::query()->join('sports', 'sports.id', '=', 'events.sport_id')->leftJoin('user_events', function ($join) {
                $join->on('events.id', '=', 'user_events.event_id');
            })->orderBy($data['sort'])->select(
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
                    "start_time"=>$event->start_time,
                    "end_time"=>$event->end_time,
                    "comment"=>$event->comment,
                    "status"=>$event->status,
                    "resolution"=>$event->resolution,
                    "server_id"=>$event->server_id,
                    "stream_id"=>$event->stream_id,
                    "source"=>$event->source,
                    "new"=>true,
                ];
                return $event;
            })->chunk($size);

            return $events;
        }

        if($data['filter'] == 'Trashcan'){
            $events = Event::query()->join('sports', 'sports.id', '=', 'events.sport_id')->leftJoin('user_events', function ($join) {
                $join->on('events.id', '=', 'user_events.event_id');
            })->orderBy($data['sort'])->where('user_events.user_id', $user->id)->whereNotNull('user_events.trashcan')->select(
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
                return $event;
            })->chunk($size);

            return $events;
        }

        if($data['filter'] == 'All'){
            $events = Event::query()->orderBy($data['sort'])->get();
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
                    "new" => UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->count() >1 ? false : true,
                ];
                return $event;
            })->filter(function ($event) use($user){
                return !$event['trashcan'];
            })->chunk($size);
            return $events;
        }

        if(isset($data['filter_date']) && $data['filter']=='Date' && $data['filter_date']){
            $events = Event::query()->where('date', $data['filter_date'])->orderBy($data['sort'])->get();
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
                    "new" => UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->count() >1 ? false : true,
                ];
                return $event;
            })->filter(function ($event) use($user){
                return !$event['trashcan'];
            })->chunk($size);
            return $events;
        }

        if($data['filter']){
            $events = Event::query()->orderBy($data['sort'])->get();
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
                    "new" => UserEvent::query()->where('user_id', $user->id)->where('event_id', $event->id)->count() >1 ? false : true,
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
        $events = Event::query()->where('created_at', '>', Carbon::now()->subMinutes(3))->count();
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
}
