<template>
    <vue-final-modal v-model="show" classes="" :hide-overlay="true" :click-to-close="false"
                     :prevent-click="true"
                     content-class="w-1/4 absolute flex flex-col max-h-full mx-4 p-4 border rounded bg-gray-100 bottom-5 right-3">
        <button class="modal__close" @click="show=false">
            <i class="fa-solid fa-xmark text-xl text-gray-900 hover:text-gray-600 transition"></i>
        </button>
        <span class="block text-lg font-medium mb-5 ml-2">New stream!</span>
        <div class="">
            <span class="block p-2 pb-3">{{count}} new streams have been added, you can view them in the "New" section.</span>
            <div class="flex justify-between">
                <div class=""></div>
                <button type="submit" @click="show=false"
                        class="text-white text-base bg-gray-400 hover:bg-gray-500 transition focus:ring-4 bott focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center">
                    Close
                </button>
            </div>
        </div>
    </vue-final-modal>
    <audio id="sound" hidden ref="audio">
        <source src="../../../public/audio.mp3" type="audio/mpeg">
    </audio>
</template>

<script>
import ModalComments from '@/Components/ModalComments.vue'
import {$vfm, VueFinalModal, ModalsContainer} from 'vue-final-modal'

export default {
    data(){
      return{
          show: false,
          count: 0,
      }
    },
    components:{
        VueFinalModal,
        ModalsContainer,
    },
    methods:{
        async checkNew(){
            try {
                const response = await axios.get('api/events/new');
                this.count = response.data;
                if(this.count>0){
                    this.open()
                }
            }catch (e){
                console.log(e);
            }
        },
        open(){
            this.show=true;
            const audio = document.getElementById('sound');
            audio.play()
        }
    },
    mounted() {
        this.checkNew();
        setInterval(
            () => this.checkNew(),
            180000
        );
    }
}
</script>
