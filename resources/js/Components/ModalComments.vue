<template>
    <span class="block text-lg font-medium mb-2 ml-2">Comments rtmp://192:168:0:1:1936/{{serverId}}/{{streamId}}</span>
    <div v-if="comments[0]" class="w-full">
        <table class="table-auto w-full text-sm bg-gray-50">
            <thead>
            <tr class="bg-gray-200 border border-slate-300">
                <th class="w-1/4 border border-slate-300 p-1">Username</th>
                <th class="w-3/4 border border-slate-300 p-1">Comment</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="comment in comments" class="border border-slate-300">
                <td class="border border-slate-300 p-1">{{ comment.username }}</td>
                <td class="border border-slate-300 p-1">{{ comment.comment }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    <div v-else class="ml-2"><span>No comments</span></div>
</template>

<script>
export default {
    props:{
        comments:Object,
    }
}
</script>
