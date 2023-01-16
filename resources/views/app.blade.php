<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <script src="https://kit.fontawesome.com/6160658b8e.js" crossorigin="anonymous"></script>
    <script src="https://softvelum.com/player/releases/sldp-v2.24.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.10/clipboard.min.js"></script>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="h-screen">

@inertia

<script>
    document.addEventListener("DOMContentLoaded", initPlayer);
    function initPlayer() {
        sldpPlayer = SLDP.init({
            container: 'player',
            stream_url: 'rtmp://176.99.135.76:1935/BetStreams/7745230',
            adaptive_bitrate: {
                initial_rendition: '240p'
            },
            buffering: 500,
            autoplay: false,
            height: 300,
            width: 424
        });
    }
</script>

</body>
</html>
{{--<script src="node_modules/flowbite/dist/flowbite.js"></script>--}}

