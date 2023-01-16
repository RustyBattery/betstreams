<?php

namespace App\Exports;

use App\Models\Event;
use App\Models\Sport;
use App\Models\User;
use App\Models\UserEvent;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;

class ClientStatisticsExport implements FromCollection, ShouldAutoSize
{
    private $user_id;
    private $start_date;
    private $end_date;
    private $taken;
    private $comment;

    public function __construct($user_id, $start, $end, $taken, $comment) {
        $this->user_id = $user_id;
        $this->start_date = $start;
        $this->end_date = $end;
        $this->taken = $taken;
        $this->comment = $comment;
    }

    public function collection()
    {
        $result = [];
        $result = collect($result);
        $user = User::query()->findOrFail($this->user_id);

        $result->push([$user->username]);
        $result->push([""]);

        $result->push(["start date", $this->start_date, "", "end date", $this->end_date]);
        $result->push([""]);

        if($this->taken){
            $count_taken = UserEvent::query()->where('user_id', $user->id)->where('taken', '>=', $this->start_date)->where('taken', '<=', $this->end_date)->count();
            $result->push(["get link", $count_taken]);
        }

        if($this->comment){
            $count_comment = UserEvent::query()->where('user_id', $user->id)->where('add_comment', '>=', $this->start_date)->where('add_comment', '<=', $this->end_date)->count();
            $result->push(["comment", $count_comment]);
        }

        $result->push([""]);

        $result->push([
            "",
            "sport",
            "tournament",
            "event",
            "date",
            "start time",
            "end time",
            "status",
            "my comment",
            "link",
            "add comment",
            "get link"]);
        if($this->taken){
            $user_taken_events = UserEvent::query()->where('user_id', $user->id)->where('user_id', $user->id)->where('taken', '>=', $this->start_date)->where('taken', '<=', $this->end_date)->get();
            foreach ($user_taken_events as $user_event){
                $event = Event::query()->findOrFail($user_event->event_id);
                $sport = Sport::query()->findOrFail($event->sport_id);
                $result->push([
                    "taken",
                    $sport->name,
                    $event->tournament,
                    $event->event,
                    $event->date,
                    $event->start_time,
                    $event->end_time,
                    $event->status,
                    $user_event->comment,
                    'link',
                    $user_event->add_comment,
                    $user_event->taken]);
            }
        }

        $result->push([""]);

        if($this->comment){
            $user_comment_events = UserEvent::query()->where('user_id', $user->id)->where('user_id', $user->id)->where('add_comment', '>=', $this->start_date)->where('add_comment', '<=', $this->end_date)->get();
            foreach ($user_comment_events as $user_event){
                $event = Event::query()->where('id', $user_event->event_id)->first();
                if($event){
                    $sport = Sport::query()->where('id', $event->sport_id)->first();
                    $result->push([
                        "comment",
                        $sport->name,
                        $event->tournament,
                        $event->event,
                        $event->date,
                        $event->start_time,
                        $event->end_time,
                        $event->status,
                        $user_event->comment,
                        'link',
                        $user_event->add_comment,
                        $user_event->taken]);
                }
            }
        }

        return $result;
    }
}
