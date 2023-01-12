<template>
    <div class="px-5 py-3">
        <div class="mb-3">
            <c-button class="mr-3 px-5 py-1">Add event</c-button>
            <c-button class="px-5 py-1">Add event (excel)</c-button>
        </div>
        <Filter></Filter>
        <table class="border-collapse border border-slate-400 table-auto w-full">
            <thead>
            <tr class="bg-gray-200">
                <th class="border border-slate-300 py-1 text-xs">Sport</th>
                <th class="border border-slate-300 py-1 text-xs">Tournament</th>
                <th class="border border-slate-300 py-1 text-xs">Event</th>
                <th class="border border-slate-300 py-1 text-xs">Date</th>
                <th class="border border-slate-300 py-1 text-xs">Start</th>
                <th class="border border-slate-300 py-1 text-xs">End</th>
                <th class="border border-slate-300 py-1 text-xs">Status</th>
                <th class="border border-slate-300 py-1 text-xs">Resolution</th>
                <th class="border border-slate-300 py-1 text-xs">Server ID</th>
                <th class="border border-slate-300 py-1 text-xs">Stream ID</th>
                <th class="border border-slate-300 py-1 text-xs">Link</th>
                <th class="border border-slate-300 py-1 text-xs">Comment</th>
                <th class="border border-slate-300 py-1 text-xs">My comment</th>
            </tr>
            </thead>

            <tbody>
            <tr class="bg-green-100">
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">14.03.2022</td>
                <td class="border border-slate-300 text-xs">18:00</td>
                <td class="border border-slate-300 text-xs">22:36</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">FullHD</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
            </tr>
            <tr>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">14.03.2022</td>
                <td class="border border-slate-300 text-xs">18:00</td>
                <td class="border border-slate-300 text-xs">22:36</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">FullHD</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
            </tr>
            <tr class="bg-yellow-100">
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">14.03.2022</td>
                <td class="border border-slate-300 text-xs">18:00</td>
                <td class="border border-slate-300 text-xs">22:36</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">FullHD</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
            </tr>
            <tr class="bg-red-200">
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">14.03.2022</td>
                <td class="border border-slate-300 text-xs">18:00</td>
                <td class="border border-slate-300 text-xs">22:36</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">FullHD</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
            </tr>
            <tr class="bg-blue-100">
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">14.03.2022</td>
                <td class="border border-slate-300 text-xs">18:00</td>
                <td class="border border-slate-300 text-xs">22:36</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">FullHD</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indiana</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
                <td class="border border-slate-300 text-xs">Indianapolis</td>
            </tr>
            </tbody>
        </table>
        <div class="mt-4 flex justify-center">
            <Pagination></Pagination>
        </div>
    </div>
</template>

<script>
import Layout from '@/Components/Layout.vue'
import Pagination from '@/Components/Pagination.vue'
import CButton from '@/Components/UI/CButton.vue'
import Filter from '@/Components/Filter.vue'

export default {
    layout: Layout,
    components: {
        Pagination,
        CButton,
        Filter,
    },
}
</script>

<style>
</style>
