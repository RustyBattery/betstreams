<template>
    <main>
        <nav class="bg-gray-100 px-4">
            <div class="flex flex-wrap items-center justify-between mx-4">
                <div class="flex">
                    <a href="/" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap">BetStreams</span>
                    </a>
                    <div class="block mx-10">
                        <ul class="flex p-4 text-sm font-medium">
<!--                            <li class="mx-2">-->
<!--                                <a href="/" class="block p-2 text-gray-700   text-blue-700 cursor-default   hover:text-blue-700 transition" aria-current="page">Streams</a>-->
<!--                            </li>-->
                            <li class="mx-2">
                                <a href="/" class="block p-2 text-gray-700 hover:text-blue-700 transition" :class="[url ==='/' ? 'text-blue-700' : '']">Streams</a>
                            </li>
                            <li v-if="authUser.role === 'admin'" class="mx-2">
<!--                            <li class="mx-2">-->
                                <a href="/users" class="block p-2 text-gray-700 hover:text-blue-700 transition" :class="[url ==='/users' ? 'text-blue-700' : '']">Users</a>
                            </li>
                            <li v-if="authUser.role === 'client'" class="mx-2">
<!--                            <li class="mx-2">-->
                                <a href="/profile" class="block p-2 text-gray-700 hover:text-blue-700 transition" :class="[url ==='/profile' ? 'text-blue-700' : '']">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-auto">
                    <ul class="flex p-4 text-sm font-medium">
                        <li>
                            <div class="block p-2 text-gray-400 transition cursor-default">{{authUser.username}} {{authUser.role!='client'?'('+authUser.role+')':''}}</div>
                        </li>
                        <li>
                            <a @click="logout()" class="block p-2 text-gray-700 hover:text-blue-700 transition cursor-pointer">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <slot />
    </main>
</template>

<script>
export default{
    props:{
      authUser: Object,
    },
    data(){
        return{
            url: window.location.pathname,
        }
    },
    methods:{
        async logout(){
            try {
                const response = await await axios.post('/logout');
                window.location.href = '/';
            }catch (e){
               console.log(e);
            }
        }
    }
}
</script>
