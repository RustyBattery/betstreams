<template>
    <div class="px-10 py-3">
        <div class="ml-3">
            <CButton class="px-5 py-2" @click="initPlayers()">Show streams</CButton>
        </div>
        <div class="w-full flex flex-wrap">
            <div v-for="stream in streams[0]" class="p-2">
                <span class="relative left-6 top-10 text-white z-50">{{stream.server_id}}</span>
                <div :id="'player'+stream.id"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Layout from '@/Components/Layout.vue'
import CButton from '@/Components/UI/CButton.vue'
import {ref} from 'vue';

export default {
    layout: Layout,
    components: {
        CButton,
    },
    data() {
        return {
            settings:{
                ip: "",
                server_name: "",
                app_name: "",
                table_size: "",
            },
            streams: [],
            players: [],
        }
    },
    methods: {
        async getSettings() {
            try {
                const response = await axios.get('/api/conf');
                this.settings = response.data;
            }catch (e){
                console.log(e);
            }
        },
        async getEvents(){
            try {
                const response = await axios.post('api/events', { filter: 'LIVE'});
                this.streams = response.data;
            }catch (e){
                console.log(e);
            }
        },
        initPlayers(){
            let streams = this.streams[0];
            for (let key in streams) {
                console.log(streams[key]);
                console.log('player'+ streams[key].id);
                console.log("ws://"+String(this.settings.ip)+":8081/"+String(this.settings.server_name)+"/"+String(streams[key].stream_id));

                this.players.push(
                    SLDP.init({
                        container: 'player'+ streams[key].id,
                        stream_url: "ws://"+String(this.settings.ip)+":8081/"+String(this.settings.server_name)+"/"+String(streams[key].stream_id),
                        height: window.innerHeight / 3,
                        width: window.innerWidth / 4.5,
                        autoplay: true,
                        muted: true,
                    })
                )
            }
        }
    },
    mounted() {
        this.getSettings();
        this.getEvents();
    }
}
</script>
