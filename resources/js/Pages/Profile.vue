<template>
    <div class="px-28 py-3">
        <form class="">
            <div class="mb-6">
                <label for="name" class="block mb-2 text-lg font-medium text-gray-900">Your name</label>
                <div class="flex">
                    <input type="text" id="name" v-model="user.name"
                           class="mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1"
                           required>
                    <button @click.prevent="editUser()"
                            class="text-white text-base bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center">
                        Save changes
                    </button>
                </div>
            </div>
        </form>
        <div v-if="user.token" class="mb-6">
            <span class="block mb-2 text-lg font-medium text-gray-900">
                Your API token: <span @click="copy(this.user.token)" class="text-md font-medium text-gray-600 transition hover:text-gray-500 cursor-pointer ml-3" title="Hi! I'm tooltip">{{this.user.token}}</span>
            </span>
        </div>
        <div class="mb-6">
            <span class="block mb-2 text-lg font-medium text-gray-900">Ip list</span>
            <table class="table-fixed w-auto">
                <thead>
                <tr>
                    <th class="w-auto"></th>
                    <th class="w-32"></th>
                    <th class="w-32"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="ip in user.ip_list" class="">
                    <td class="pb-4">
                        <input type="text" id="ip" v-model="ip.value"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-1"
                               required>
                    </td>
                    <td class="pb-4">
                        <button type="submit" @click.prevent="editIp(ip)"
                                class="text-white text-sm bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center">
                            Save changes
                        </button>
                    </td>
                    <td class="pb-4">
                        <button type="submit" @click.prevent="deleteIp(ip)"
                                class="text-white text-sm bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 transition focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center">
                            Delete
                        </button>
                    </td>
                </tr>

                <tr class="">
                    <td class="pb-2">
                        <span class="text-lg font-medium text-gray-900"> Add ip</span>
                    </td>
                    <td class="pb-4"></td>
                    <td class="pb-4"></td>
                </tr>
                <tr class="">
                    <td class="pb-2">
                        <input type="text" id="ip" v-model="newIp.value"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-1"
                               required>
                    </td>
                    <td class="pb-2">
                        <button type="submit" @click.prevent="createIp()"
                                class="text-white text-sm bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center">
                            Add
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="">
            <span class="block mb-2 text-lg font-medium text-gray-900">Get statistics</span>
            <div class="w-96 mb-3 flex justify-between">
                <div class="date w-6/12 mr-1">
                    <label for="date_start" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Date
                        start</label>
                    <input type="date" id="date_start" v-model="statistics.startDate"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                           required>
                </div>
                <div class="date w-6/12 ml-1">
                    <label for="date_end" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Date end</label>
                    <input type="date" id="date_end" v-model="statistics.endDate"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                           required>
                </div>
            </div>
            <div class="flex mb-4">
                <div class="flex items-center mr-5">
                    <input v-model="statistics.take" id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Taken</label>
                </div>
                <div class="flex items-center">
                    <input v-model="statistics.comment" id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">With comments</label>
                </div>
            </div>
            <button type="submit" @click="statistics.user = user; getStatistics()"
                    class="text-white text-md bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-auto px-5 py-1 text-center">
                Download
            </button>
        </div>
    </div>
</template>

<script>
import Layout from '@/Components/Layout.vue'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref} from 'vue';

export default {
    layout: Layout,
    components: {
        Datepicker
    },
    data(){
      return{
          user: {

          },
          newIp:{
              user_id: '',
              value: ''
          },
          statistics: {
              startDate: '',
              endDate: '',
              take: true,
              comment: true,
          },
      }
    },
    setup() {
        const date = ref();

        return {
            date,
        }
    },
    methods:{
        async getUser(){
            try {
                const response = await axios.get('api/users/profile');
                this.user = response.data;
            }catch (e){
                console.log(e);
            }
        },
        async editUser(){
            try {
                const response = await axios.post('api/users/edit', this.user);
                window.location.href = '/profile';
            }catch (e){
                console.log(e);
                alert('Check the entered data!');
            }
        },
        async createIp(){
            try {
                this.newIp.user_id = this.user.id;
                const response = await axios.post('api/users/ip/edit', this.newIp);
                window.location.href = '/profile';
            }catch (e){
                console.log(e);
                alert('Check the entered data!');
            }
        },
        async editIp(ip){
            try {
                ip.user_id = this.user.id;
                const response = await axios.post('api/users/ip/edit', ip);
                window.location.href = '/profile';
            }catch (e){
                console.log(e);
                alert('Check the entered data!');
            }
        },
        async deleteIp(ip){
            try {
                const response = await axios.post('api/users/ip/delete', {'id':ip.id});
                this.getUser();
            }catch (e){
                console.log(e);
            }
        },
        getStatistics(){
            const url = 'api/statistics'+'?start_date='+this.statistics.startDate+'&end_date='+this.statistics.endDate+'&taken='+Number(this.statistics.take)+'&comment='+Number(this.statistics.comment)+'&user_id='+this.statistics.user.id;
            window.location.href = url;
            this.modal.statistics=false;
        },
        copy(value){
            navigator.clipboard.writeText(value);
        }
    },
    mounted() {
        this.getUser();
    }
}
</script>
