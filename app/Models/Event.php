<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        "sport_id",
        "tournament",
        "event",
        "date",
        "start_time",
        "end_time",
        "comment",
        "status",
        "resolution",
        "server_id",
        "stream_id",
        "source",
    ];

    public function sport(): BelongsTo
    {
        return $this->belongsTo(Sport::class);
    }

    public function statistics()
    {
        return $this->belongsToMany(User::class, 'user_events');
    }
}
