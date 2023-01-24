<template>
    <div class="px-28 py-3">
        <form class="">
            <div class="mb-6">
                <label for="app_name" class="block mb-2 text-lg font-medium text-gray-900">App name</label>
                <input type="text" id="app_name" v-model="settings.app_name"
                       class="mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1"
                       required>

            </div>
            <div class="mb-6">
                <label for="ip" class="block mb-2 text-lg font-medium text-gray-900">IP server</label>
                <input type="text" id="ip" v-model="settings.ip"
                       class="mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1"
                       required>

            </div>
            <div class="mb-6">
                <label for="server_name" class="block mb-2 text-lg font-medium text-gray-900">Server name</label>
                <input type="text" id="server_name" v-model="settings.server_name"
                       class="mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1"
                       required>

            </div>
            <div class="mb-6">
                <label for="table_size" class="block mb-2 text-lg font-medium text-gray-900">Table size</label>
                <input type="text" id="table_size" v-model="settings.table_size"
                       class="mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1"
                       required>

            </div>
            <CButton @click.prevent="editSettings()" class="px-5 py-1.5">Save changes</CButton>
        </form>
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
            }
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
        async editSettings() {
            try {
                const response = await axios.post('api/conf/edit', this.settings);
                // window.location.href = '/settings';
                this.getSettings();
            } catch (e) {
                if (e.response.status < 500) {
                    alert(e.response.data.message);
                } else alert('An error has occurred! Try again.');
            }
        },
    },
    mounted() {
        this.getSettings();
    }
}
</script>
