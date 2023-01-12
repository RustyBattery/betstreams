<template>
    <div class="px-5 py-3">
        <div class="mb-3 flex justify-between">
            <div class="flex w-full">
                <button type="button" class="mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default">Live</button>
                <button type="button" class="mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700">Finished</button>
                <button type="button" class="mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700">Scheduled</button>
                <button type="button" class="mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700">Сanceled</button>
                <button type="button" class="mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700">New</button>
                <button type="button" class="mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700">Today</button>
                <button type="button" class="px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700">Trashcan</button>
            </div>
            <div class="flex w-80 items-center">
                <label for="small" class="block mr-3 text-sm font-medium whitespace-nowrap">Sort by</label>
                <select id="small" class="block w-full p-1 text-xs text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
        </div>
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

export default {
    layout: Layout,
    components: {
        Pagination,
    },
}
</script>

<style>
</style>
