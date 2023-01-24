<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <script src="https://kit.fontawesome.com/6160658b8e.js" crossorigin="anonymous"></script>
    {{--    <script src="https://softvelum.com/player/releases/sldp-v2.24.0.min.js"></script>--}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.10/clipboard.min.js"></script>
    <script src="{{asset('player.js')}}"></script>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="h-screen">
    <div class="" id="player2"></div>
    @inertia

{{--    <script>--}}
{{--        document.addEventListener('DOMContentLoaded', initPlayer);--}}
{{--        var sldpPlayer;--}}

{{--        function initPlayer() {--}}
{{--            sldpPlayer = SLDP.init({--}}
{{--                container: 'player2',--}}
{{--                stream_url: "ws://176.99.135.20:8081/Bet/123321",--}}
{{--                height: 360,--}}
{{--                width: 640,--}}
{{--                autoplay: true--}}
{{--            });--}}
{{--        }--}}

{{--        function removePlayer() {--}}
{{--            sldpPlayer.destroy()--}}
{{--        }--}}
{{--    </script>--}}
</body>
</html>
{{--<script src="node_modules/flowbite/dist/flowbite.js"></script>--}}

