<template>
    <div class="px-10 py-3">
        <div class="mb-5">
            <button type="submit" @click="modal.newUser = true"
                    class="text-white text-base bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Add new user
            </button>
        </div>
        <table class="table-fixed w-full text-sm bg-gray-50">
            <thead>
            <tr class="bg-gray-200 border border-slate-300">
                <th class="w-1/3 border border-slate-300 p-1">Name</th>
                <th class="w-auto border border-slate-300 p-1">Username</th>
                <th class="w-24 border border-slate-300 p-1">Role</th>
                <th class="w-32 border border-slate-300 p-1">Token</th>
                <th class="w-20 border border-slate-300 p-1">Ip list</th>
                <th class="w-20 p-2"></th>
                <th class="w-20 p-1">Actions</th>
                <th class="w-20 p-2"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" class="border border-slate-300">
                <td class="border border-slate-300 p-1">{{ user.name }}</td>
                <td class="border border-slate-300 p-1">{{ user.username }}</td>
                <td class="border border-slate-300 p-1 ">{{ user.role }}</td>
                <td v-if="user.token" class="overflow-ellipsis overflow-hidden border border-slate-300 text-center cursor-pointer hover:text-gray-500 transition">
                    <span class="font-medium overflow-ellipsis">{{ user.token }}</span>
                </td>
                <td v-else class="border border-slate-300 p-1 text-center">
                    <button type="submit" @click.prevent="editUser=user; editUser.can_use_api=1; updateUser()"
                            class="text-white text-sm bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center">
                        Issue token
                    </button>
                </td>
                <td class="border border-slate-300 text-center cursor-pointer hover:text-gray-500 transition">
                    <span class="font-medium">show</span>
                </td>
                <td class="">
                    <button type="submit" @click="editUser = user; editUser.token ? editUser.can_use_api=true:editUser.can_use_api=false; modal.editUser = true"
                            class="text-white text-sm bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-3 py-1 text-center">
                        Edit
                    </button>
                </td>
                <td class="">
                    <button type="submit" @click="modal.statistics = true"
                            class="text-white text-sm bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-3 py-1 text-center">
                        Statistics
                    </button>
                </td>
                <td class="">
                    <button type="submit" @click="deleteUser(user)"
                            class="text-white text-sm bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 transition focus:outline-none font-medium rounded-lg text-sm w-full px-3 py-1 text-center">
                        Delete
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

    <div>
        <vue-final-modal v-model="modal.editUser" classes="flex justify-center items-center"
                         content-class="w-7/12 relative flex flex-col max-h-full mx-4 p-4 border rounded bg-white">
            <button class="modal__close" @click="modal.editUser = false">
                <i class="fa-solid fa-xmark text-2xl text-gray-900 hover:text-gray-600 transition"></i>
            </button>
            <span class="block text-lg font-medium mb-2 ml-2">Edit {{ editUser.username }}</span>
            <form class="">
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Name</label>
                    <input type="text" id="username" v-model="editUser.name"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1" required>
                </div>
                <div class="mb-5 flex justify-between">
                    <div class="w-1/2 pr-2">
                        <label for="name" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Login</label>
                        <input type="text" id="username" v-model="editUser.username"
                               class=" bg-gray-200 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1" disabled required>
                    </div>
                    <div class="w-1/2 pl-2">
                        <label for="password" class="block mb-2 text-mb font-medium text-gray-900 ml-2">New password</label>
                        <input type="text" id="password" v-model="editUser.password"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                               required>
                    </div>
                </div>
                <div class="mb-5">
                    <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                    <select id="role" v-model="editUser.role" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
                        <option value="client">Client</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div class="flex items-center mb-5">
                    <input v-model="editUser.can_use_api" id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Can use API</label>
                </div>
                <div class="flex justify-between">
                    <button type="submit" @click.prevent="updateUser()"
                            class="text-white text-base bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center">
                        Save
                    </button>
                    <button type="submit" @click="editUser ={}; modal.editUser = false"
                            class="text-white text-base bg-gray-400 hover:bg-gray-500 transition focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center">
                        Close
                    </button>
                </div>
            </form>
        </vue-final-modal>
        <vue-final-modal v-model="modal.newUser" classes="flex justify-center items-center"
                         content-class="w-7/12 relative flex flex-col max-h-full mx-4 p-4 border rounded bg-white">
            <button class="modal__close" @click="modal.newUser = false">
                <i class="fa-solid fa-xmark text-2xl text-gray-900 hover:text-gray-600 transition"></i>
            </button>
            <span class="block text-lg font-medium mb-2 ml-2">Register user</span>
            <form class="">
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Name</label>
                    <input type="text" id="username" v-model="newUser.name"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1" required>
                </div>
                <div class="mb-5 flex justify-between">
                    <div class="w-1/2 pr-2">
                        <label for="name" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Login</label>
                        <input type="text" id="username" v-model="newUser.username"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1" required>
                    </div>
                    <div class="w-1/2 pl-2">
                        <label for="password" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Password</label>
                        <input type="text" id="password" v-model="newUser.password"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                               required>
                    </div>
                </div>
                <div class="mb-5">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                    <select v-model="newUser.role" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
                        <option value="client">Client</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div class="flex items-center mb-5">
                    <input v-model="newUser.can_use_api" id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Generate API token</label>
                </div>
                <div class="flex justify-between">
                    <button type="submit" @click.prevent="createUser()"
                            class="text-white text-base bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center">
                        Register
                    </button>
                    <button type="submit" @click="modal.newUser = false"
                            class="text-white text-base bg-gray-400 hover:bg-gray-500 transition focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center">
                        Close
                    </button>
                </div>
            </form>
        </vue-final-modal>
        <vue-final-modal v-model="modal.statistics" classes="flex justify-center items-center"
                         content-class="w-1/3 relative flex flex-col max-h-full mx-4 p-4 border rounded bg-white">
            <button class="modal__close" @click="modal.statistics = false">
                <i class="fa-solid fa-xmark text-2xl text-gray-900 hover:text-gray-600 transition"></i>
            </button>
            <span class="block text-lg font-medium mb-5 ml-2">Get statistics user2048</span>
            <div class="">
                <div class="w-full mb-6 text-xs">
                    <Datepicker v-model="date" range />
                </div>
                <div class="flex mb-6">
                    <div class="flex items-center mr-5">
                        <input checked id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Taken</label>
                    </div>
                    <div class="flex items-center">
                        <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">With comments</label>
                    </div>
                </div>
                <div class="flex justify-between">
                    <button type="submit" @click="modal.statistics = false"
                            class="text-white text-md bg-sky-600 hover:bg-sky-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-auto px-5 py-1 text-center">
                        Download
                    </button>
                    <button type="submit" @click="modal.statistics = false"
                            class="text-white text-base bg-gray-400 hover:bg-gray-500 transition focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center">
                        Close
                    </button>
                </div>
            </div>


        </vue-final-modal>
    </div>

</template>

<script>
import Layout from '@/Components/Layout.vue'
import {$vfm, VueFinalModal, ModalsContainer} from 'vue-final-modal'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref} from 'vue';

export default {
    layout: Layout,
    components: {
        VueFinalModal,
        ModalsContainer,
        Datepicker
    },
    data(){
        return{
            modal:{
                newUser: false,
                editUser: false,
                statistics: false,
            },
            newUser: {},
            editUser:{},
            users:{}
        }
    },
    setup() {
        const date = ref();

        return {
            date,
        }
    },
    methods:{
        async getUsers(){
            try {
                const response = await axios.get('api/users');
                this.users = response.data;
                console.log(response);
            }catch (e){
                console.log(e);
            }
        },
        async createUser(){
            try {
                this.newUser.can_use_api = Number(this.newUser.can_use_api);
                const response = await axios.post('api/users/add', this.newUser);
                this.modal.newUser=false;
                this.newUser ={};
                this.getUsers();
            }catch (e){
                console.log(e);
                alert('Check the entered data!');
            }
        },
        async updateUser(){
            try {
                this.editUser.can_use_api = Number(this.editUser.can_use_api);
                const response = await axios.post('api/users/edit', this.editUser);
                this.modal.editUser=false;
                this.getUsers();
            }catch (e){
                console.log(e);
                alert('Check the entered data!');
            }
        },
        async deleteUser(user){
            if(confirm("Are you sure?")){
                try {
                    const response = await axios.post('api/users/delete', {'id': user.id});
                    this.getUsers();
                }catch (e){
                    console.log(e);
                }
            }
        }
    },
    mounted() {
        this.getUsers();
    }
}
</script>

<style scoped>
::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
::v-deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
}
.modal__title {
    margin: 0 2rem 0 0;
    font-size: 1.5rem;
    font-weight: 700;
}
.modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
}
</style>
