<template>
    <div class="h-screen flex items-center">
        <form @submit.prevent="login()" class="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-md container mx-auto">
            <div class="mb-6">
                <label for="username" class="block mb-2 text-lg font-medium text-gray-900">Login</label>
                <input v-model="user.username" type="text" id="username"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-lg font-medium text-gray-900">Password</label>
                <input v-model="user.password" type="password" id="password"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required>
            </div>
            <CButton class="px-5 py-2">login</CButton>
        </form>
    </div>
</template>

<script>
import CButton from '@/Components/UI/CButton.vue'
export default {
    components: {
        CButton,
    },
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        }
    },
    methods:{
        async loginRequest(){
            try {
                const response = await axios.post('login', this.user);
                console.log(response);
                window.location.href = '/';
            }catch (e){
                alert('Введенные данные не верны!');
            }
        },
        async login(){
            await axios.post('/logout');
            await axios.get('/sanctum/csrf-cookie').then(response => {
                this.loginRequest();
            });
        }
    },
}
</script>

<style>
</style>
