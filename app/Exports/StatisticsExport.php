<?php

namespace App\Exports;

use App\Models\Event;
use App\Models\Sport;
use App\Models\User;
use App\Models\UserEvent;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;

class StatisticsExport implements FromCollection, ShouldAutoSize
{
    /**
    * @return \Illuminate\Support\Collection
    */
    private $start_date;
    private $end_date;
    private $taken;
    private $comment;

    public function __construct($start, $end, $taken, $comment) {
        $this->start_date = $start;
        $this->end_date = $end;
        $this->taken = $taken;
        $this->comment = $comment;
    }

    public function collection()
    {
        $result = [];
        $result = collect($result);
        $users = User::all();

        $result->push(["start date", $this->start_date]);
        $result->push(["end date", $this->end_date]);
        $result->push([""]);

        foreach ($users as $user){
            $count_take = 0;
            $count_comment = 0;

            $result->push(["", $user->username]);

            if($this->taken){
                $result->push(["Taken without comment"]);

                $countSD = UserEvent::query()->join('events', 'events.id', '=', 'user_events.event_id')
                    ->where('user_events.user_id', $user->id)
                    ->where('user_events.taken', '>=', $this->start_date)
                    ->where('user_events.taken', '<=', $this->end_date)
                    ->whereNull('user_events.add_comment')
                    ->where('resolution', 'SD')->count();
                $result->push(["SD", $countSD]);

                $countHD = UserEvent::query()->join('events', 'events.id', '=', 'user_events.event_id')
                    ->where('user_events.user_id', $user->id)
                    ->where('user_events.taken', '>=', $this->start_date)
                    ->where('user_events.taken', '<=', $this->end_date)
                    ->whereNull('user_events.add_comment')
                    ->where('resolution', 'HD')->count();
                $result->push(["HD", $countHD]);

                $countFullHD = UserEvent::query()->join('events', 'events.id', '=', 'user_events.event_id')
                    ->where('user_events.user_id', $user->id)
                    ->where('user_events.taken', '>=', $this->start_date)
                    ->where('user_events.taken', '<=', $this->end_date)
                    ->whereNull('user_events.add_comment')
                    ->where('resolution', 'FullHD')->count();
                $result->push(["FullHD", $countFullHD]);

                $count_take = $countSD + $countHD + $countFullHD;
            }
            $result->push([""]);

            if($this->comment){
                $result->push(["Taken with comment"]);

                $countSD = UserEvent::query()->join('events', 'events.id', '=', 'user_events.event_id')
                    ->where('user_events.user_id', $user->id)
                    ->where('user_events.taken', '>=', $this->start_date)
                    ->where('user_events.taken', '<=', $this->end_date)
                    ->whereNotNull('user_events.add_comment')
                    ->where('resolution', 'SD')->count();
                $result->push(["SD", $countSD]);

                $countHD = UserEvent::query()->join('events', 'events.id', '=', 'user_events.event_id')
                    ->where('user_events.user_id', $user->id)
                    ->where('user_events.taken', '>=', $this->start_date)
                    ->where('user_events.taken', '<=', $this->end_date)
                    ->whereNotNull('user_events.add_comment')
                    ->where('resolution', 'HD')->count();
                $result->push(["HD", $countHD]);

                $countFullHD = UserEvent::query()->join('events', 'events.id', '=', 'user_events.event_id')
                    ->where('user_events.user_id', $user->id)
                    ->where('user_events.taken', '>=', $this->start_date)
                    ->where('user_events.taken', '<=', $this->end_date)
                    ->whereNotNull('user_events.add_comment')
                    ->where('resolution', 'FullHD')->count();
                $result->push(["FullHD", $countFullHD]);

                $count_comment = $countSD + $countHD + $countFullHD;
            }
            $result->push([""]);

            if($this->taken && $count_take){
                $result->push([
                    "without comment",
                    "sport",
                    "tournament",
                    "event",
                    "date",
                    "start time",
                    "resolution",
//                    "end time",
                    "status",
                    "server id",
                    "stream id",
                    "comment",
                    "source url",
                    "get link",
//                    "client comment",
//                    "add comment",
                ]);


                $user_taken_events = UserEvent::query()->where('user_id', $user->id)
                    ->where('user_id', $user->id)
                    ->where('taken', '>=', $this->start_date)
                    ->where('taken', '<=', $this->end_date)
                    ->whereNull('add_comment')->get();
                foreach ($user_taken_events as $user_event){
                    $event = Event::query()->findOrFail($user_event->event_id);
                    $sport = Sport::query()->findOrFail($event->sport_id);
                    $result->push([
                        "",
                        $sport->name,
                        $event->tournament,
                        $event->event,
                        $event->date,
                        $event->start_time,
                        $event->resolution,
//                        $event->end_time,
                        $event->status,
                        $event->server_id,
                        $event->stream_id,
                        $event->comment,
                        $event->source,
                        $user_event->taken,
//                        $user_event->comment,
//                        $user_event->add_comment,
                        ]);
                }
                $result->push([""]);
            }

            if($this->comment && $count_comment){
                $result->push([
                    "without comment",
                    "sport",
                    "tournament",
                    "event",
                    "date",
                    "start time",
                    "resolution",
//                    "end time",
                    "status",
                    "server id",
                    "stream id",
                    "comment",
                    "source url",
                    "get link",
                    "client comment",
                    "add comment",
                ]);


                $user_comment_events = UserEvent::query()->where('user_id', $user->id)
                    ->where('user_id', $user->id)
                    ->where('taken', '>=', $this->start_date)
                    ->where('taken', '<=', $this->end_date)
                    ->where('add_comment', '>=', $this->start_date)
                    ->where('add_comment', '<=', $this->end_date)->get();
                foreach ($user_comment_events as $user_event){
                    $event = Event::query()->where('id', $user_event->event_id)->first();
                    if($event){
                        $sport = Sport::query()->where('id', $event->sport_id)->first();
                        $result->push([
                            "",
                            $sport->name,
                            $event->tournament,
                            $event->event,
                            $event->date,
                            $event->start_time,
                            $event->resolution,
//                            $event->end_time,
                            $event->status,
                            $event->server_id,
                            $event->stream_id,
                            $event->comment,
                            $event->source,
                            $user_event->taken,
                            $user_event->comment,
                            $user_event->add_comment]);
                    }
                }
            }

            $result->push([""]);
            $result->push([""]);
            $result->push([""]);
        }
        return $result;
    }
}
