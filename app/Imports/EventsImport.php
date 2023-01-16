<?php

namespace App\Imports;

use App\Models\Event;
use App\Models\Sport;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\HasReferencesToOtherSheets;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithCalculatedFormulas;
use PhpOffice\PhpSpreadsheet\Shared\Date;

class SheetImport implements ToCollection, HasReferencesToOtherSheets, WithCalculatedFormulas
{
    public function collection(Collection $rows)
    {
        $rows->forget(0);
        $rows->forget(1);

        foreach ($rows as $row)
        {
            $status = [
                "" => "",
                "Статус" => "",
                "Status" => "",
                "не начался" => "SCHEDULED",
                "лайв" => "LIVE",
                "завершено" => "FINISHED",
                "отмена" => "CANCELED",
                "прервано" => "CANCELED",
                "SCHEDULED" => "SCHEDULED",
                "LIVE" => "LIVE",
                "FINISHED" => "FINISHED",
                "CANCELED" => "CANCELED",

            ];
            $sports = [
                "" => "",
                "Спорт" => "",
                "Sport" => "",
                "Футбол" => "Football",
                "Хоккей" => "Hockey",
                "Настольный теннис" => "Table tennis",
                "Теннис" => "Tennis",
                "Падел теннис" => "Padel tennis",
                "Баскетбол" => "Basketball",
                "Волейбол" => "Volleyball",
                "Киберспорт" => "Esports",
                "Американский футбол" => "American Football",
                "Гандбол" => "Handball",
                "Зимние виды спорта" => "Winter sports",
                "Дартс" => "Darts",
                "Регби" => "Rugby",
                "Снукер" => "Snooker",
                "Флорбол" => "Floorball",
                "Футзал" => "Futsal",
                "Хоккей с мячом" => "Bandy",
                "Пляжный волейбол" => "Beach volleyball",
                "Бадминтон" => "Badminton",
                "Пляжный футбол" => "Beach soccer",
                "Другие" => "Other",
                "Football" => "Football",
                "Hockey" => "Hockey",
                "Table tennis" => "Table tennis",
                "Tennis" => "Tennis",
                "Padel tennis" => "Padel tennis",
                "Basketball" => "Basketball",
                "Volleyball" => "Volleyball",
                "Esports" => "Esports",
                "American Football" => "American Football",
                "Handball" => "Handball",
                "Winter sports" => "Winter sports",
                "Darts" => "Darts",
                "Rugby" => "Rugby",
                "Snooker" => "Snooker",
                "Floorball" => "Floorball",
                "Futsal" => "Futsal",
                "Bandy" => "Bandy",
                "Beach volleyball" => "Beach volleyball",
                "Badminton" => "Badminton",
                "Beach soccer" => "Beach soccer",
                "Other" => "Other",
            ];

            if($row[7] == null || $row[8] == null || $row[9] == null){
                continue;
            }
            $event = [
                "sport_id" => Sport::query()->where('name', $sports[$row[0]])->first()->id,
                "tournament" => $row[1],
                "event" => $row[2],
                "date" => Date::excelToDateTimeObject($row[3])->format('Y-m-d'),
                "start_time" => Date::excelToDateTimeObject($row[4])->format('h:i:s'),
                "end_time" => Date::excelToDateTimeObject($row[5])->format('h:i:s'),
                "comment" => $row[12],
                "status" => $status[$row[6]],
                "resolution" => $row[7],
                "server_id" => $row[8],
                "stream_id" => $row[9],
                "source" => null,
            ];
            Event::query()->updateOrCreate(['stream_id' => $event["stream_id"]], $event);
        }
    }
}

class Sheet2Import implements ToCollection, WithCalculatedFormulas
{
    public function collection(Collection $collection){}
}

class EventsImport implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            'Лист1' => new SheetImport(),
            'Лист2' => new Sheet2Import(),
        ];
    }

}
