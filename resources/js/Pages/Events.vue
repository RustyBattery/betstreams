<template>
    <div class="px-5 py-3">
        <div v-if="is_admin" class="mb-3">
            <c-button class="mr-3 px-5 py-1" @click="editStream={}; modal.editStream = true">Add event</c-button>
            <c-button class="mr-3 px-5 py-1" @click="modal.addStreamExcel = true">Add event (excel)</c-button>
            <c-button class="px-5 py-1" @click="modal.statistics = true">Get statistics</c-button>
        </div>
        <div class="---filter--- mb-3 flex justify-between">
            <div class="flex w-full items-center">
                <button type="button" @click="add_filter('All'); currentPage = 1; updateURL()"
                        :disabled="filter==='All'"
                        :class="{'mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default': filter==='All', 'mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700':filter!=='All'}">
                    All
                </button>
                <button type="button" @click="add_filter('Active'); currentPage = 1; updateURL()"
                        :disabled="filter==='Active'"
                        :class="{'mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default': filter==='Active', 'mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700':filter!=='Active'}">
                    Active
                </button>
                <button type="button" @click="add_filter('LIVE'); currentPage = 1; updateURL()"
                        :disabled="filter==='LIVE'"
                        :class="{'mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default': filter==='LIVE', 'mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700':filter!=='LIVE'}">
                    Live
                </button>
                <button type="button" @click="add_filter('FINISHED'); currentPage = 1; updateURL()"
                        :disabled="filter==='FINISHED'"
                        :class="{'mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default': filter==='FINISHED', 'mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700':filter!=='FINISHED'}">
                    Finished
                </button>
                <button type="button" @click="add_filter('SCHEDULED'); currentPage = 1; updateURL()"
                        :disabled="filter==='SCHEDULED'"
                        :class="{'mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default': filter==='SCHEDULED', 'mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700':filter!=='SCHEDULED'}">
                    Scheduled
                </button>
                <button type="button" @click="add_filter('CANCELED'); currentPage = 1; updateURL()"
                        :disabled="filter==='CANCELED'"
                        :class="{'mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default': filter==='CANCELED', 'mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700':filter!=='CANCELED'}">
                    Сanceled
                </button>
                <button v-if="!is_admin" type="button" @click="add_filter('New'); currentPage = 1; updateURL()"
                        :disabled="filter==='New'"
                        :class="{'mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default': filter==='New', 'mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700':filter!=='New'}">
                    New
                </button>
                <button type="button" @click="add_filter('Today'); currentPage = 1; updateURL()"
                        :disabled="filter==='Date'"
                        :class="{'mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default': filter==='Today', 'mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700':filter!=='Today'}">
                    Today
                </button>
                <button v-if="!is_admin" type="button" @click="add_filter('Trashcan'); currentPage = 1; updateURL()"
                        :disabled="filter==='Trashcan'"
                        :class="{'mr-3 px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded cursor-default': filter==='Trashcan', 'mr-3 px-3 py-1 text-xs font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700':filter!=='Trashcan'}">
                    Trashcan
                </button>
            </div>
            <div class="flex">
                <div class="flex w-80 items-center mr-5">
                    <label for="sort" class="block mr-3 text-sm font-medium whitespace-nowrap">Sort by</label>
                    <select v-model="sort" @change="updateURL()" id="sort"
                            class="block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                        <option value="date" selected>date</option>
                        <option value="sport_id">sport</option>
                        <option value="tournament">tournament</option>
                        <option value="event">event</option>
                        <option value="status">status</option>
                    </select>
                </div>
                <div class="w-44">
                    <Datepicker @cleared="change_date('date')" @closed="change_date('date')" v-model="date"
                                :format="format" input-class-name="input-date" menu-class-name="date-menu"/>
                </div>
            </div>
        </div>

        <table class="border-collapse border border-slate-400 table-auto w-full">
            <thead>
            <tr class="bg-gray-200">
                <th class="border border-slate-300 py-1 text-xs">Sport</th>
                <th class="border border-slate-300 py-1 text-xs">Tournament</th>
                <th class="border border-slate-300 py-1 text-xs">Event</th>
<!--                <th class="border border-slate-300 py-1 text-xs">Date</th>-->
                <th class="border border-slate-300 py-1 text-xs">Start</th>
<!--                <th class="border border-slate-300 py-1 text-xs">End</th>-->
                <th class="border border-slate-300 py-1 text-xs max-w-24">Status</th>
                <th class="border border-slate-300 py-1 text-xs">Resolution</th>
                <th class="border border-slate-300 py-1 text-xs">Comment</th>
                <th v-if="!is_admin" class="border border-slate-300 py-1 text-xs">My comment</th>
                <th v-if="!is_admin" class="border border-slate-300 py-1 text-xs w-24">ID</th>
                <th v-if="is_admin" class="border border-slate-300 py-1 text-xs">Server ID</th>
                <th v-if="is_admin" class="border border-slate-300 py-1 text-xs">Stream ID</th>
                <th class="border border-slate-300 py-1 text-xs w-0">Actions</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="stream in streams"
                :class="{'bg-green-100': stream.status==='LIVE', 'bg-yellow-100': stream.status==='FINISHED', 'bg-red-100': stream.status==='CANCELED', 'bg-blue-100': stream.new === true && is_admin === false , 'font-medium': stream.recently}">
                <td class="border border-slate-300 text-xs">{{ stream.sport }}</td>
                <td class="border border-slate-300 text-xs">{{ stream.tournament }}</td>
                <td class="border border-slate-300 text-xs">{{ stream.event }}</td>
                <!--                <td class="border border-slate-300 text-xs">{{ stream.date }}</td>-->
<!--                <td class="border border-slate-300 text-xs">{{ formatDate(new Date(stream.date)) }}</td>-->
                <td class="border border-slate-300 text-xs">{{ formatDate(new Date(stream.date))+' '+stream.start_time }}</td>
<!--                <td class="border border-slate-300 text-xs">{{ formatDate(new Date(stream.date))+' '+stream.end_time }}</td>-->
                <td v-if="!is_admin" class="border border-slate-300 text-xs">{{ stream.status }}</td>
                <td v-if="is_admin" @change="editStream=stream; updateEvent(); getEvents();" class="border border-slate-300 text-xs">
                    <select v-model="stream.status"
                            class="block w-full p-0 text-xs text-gray-900 border border-gray-300 rounded bg-transparent focus:ring-blue-500 focus:border-blue-500">
                        <option value="LIVE">LIVE</option>
                        <option value="FINISHED">FINISHED</option>
                        <option value="SCHEDULED">SCHEDULED</option>
                        <option value="CANCELED">CANCELED</option>
                    </select>
                </td>
                <td class="border border-slate-300 text-xs">{{ stream.resolution }}</td>
                <td v-if="!is_admin" class="border border-slate-300 text-xs">{{ stream.comment }}</td>
                <td v-if="is_admin" class="border border-slate-300 text-xs px-1">
                    <div class="flex justify-between items-center">
                        <textarea :id="'commentChange'+stream.id" rows="1" v-model="stream.comment"
                                  class="w-full block pb-1 text-xs bg-white/[.5] rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 hidden">{{ stream.comment }}</textarea>
                        <span :id="'comment'+stream.id" class="w-full">{{ stream.comment }}</span>
                        <i @click="saveComment(stream.id, stream)" :id="'commentBtnSave'+stream.id" title="save"
                           class="block fa-solid fa-check hover:text-gray-500 transition cursor-pointer hidden"></i>
                        <i @click="editComment(stream.id)" :id="'commentBtn'+stream.id" title="edit"
                           class="block fa-solid fa-pencil hover:text-gray-500 transition cursor-pointer"></i>
                    </div>
                </td>
                <td v-if="!is_admin" class="border border-slate-300 text-xs">
                    <div class="flex justify-between content-center items-center">
                        <textarea :id="'commentClientChange'+stream.id" rows="1" v-model="stream.client_comment"
                                  class="w-full block pb-1 text-xs bg-white/[.5] rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 hidden">{{ stream.client_comment }}</textarea>
                        <span :id="'commentClient'+stream.id" class="w-full">{{ stream.client_comment }}</span>
                        <i @click="saveClientComment(stream.id, stream)" :id="'commentClientBtnSave'+stream.id" title="save"
                           class="block fa-solid fa-check hover:text-gray-500 transition cursor-pointer hidden"></i>
                        <i @click="editClientComment(stream.id, stream)" :id="'commentClientBtn'+stream.id" title="edit"
                           class="block fa-solid fa-pencil hover:text-gray-500 transition cursor-pointer"></i>
                    </div>
                </td>
                <td v-if="!is_admin" class="border border-slate-300 text-xs">
                    <div class="flex justify-between content-center items-center">
                        <textarea :id="'idClientChange'+stream.id" rows="1" v-model="stream.personal_id"
                                  class="w-full block pb-1 text-xs bg-white/[.5] rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 hidden">{{ stream.personal_id }}</textarea>
                        <span :id="'idClient'+stream.id" class="w-full">{{ stream.personal_id }}</span>
                        <i @click="saveClientId(stream.id, stream)" :id="'idClientBtnSave'+stream.id" title="save"
                           class="block fa-solid fa-check hover:text-gray-500 transition cursor-pointer hidden"></i>
                        <i @click="editClientId(stream.id, stream)" :id="'idClientBtn'+stream.id" title="edit"
                           class="block fa-solid fa-pencil hover:text-gray-500 transition cursor-pointer"></i>
                    </div>
                </td>
                <td v-if="is_admin" class="border border-slate-300 text-xs">{{ stream.server_id }}</td>
                <td v-if="is_admin" class="border border-slate-300 text-xs">{{ stream.stream_id }}</td>
                <td class="border border-slate-300 text-xs">
                    <div class="flex justify-around px-1">
                        <i v-if="!is_admin" title="get link"
                           @click="showLink(stream); clientEvent = {taken: true, event_id: stream.id}; updateClientEvent()"
                           class="link--- fa-solid fa-link mr-1 hover:text-gray-500 transition cursor-pointer"></i>
                        <i v-if="is_admin || stream.status==='LIVE'" title="preview"
                           @click="previewPlay(this.server_name, stream.stream_id)"
                           class="play--- fa-solid fa-play mr-1 hover:text-gray-500 transition cursor-pointer"></i>
                        <i v-if="!is_admin" title="add to trashcan"
                           @click="clientEvent = {trashcan: (Number(stream.trashcan)+1)%2, event_id: stream.id}; updateClientEvent()"
                           class="trashcan--- fa-solid fa-trash-can mr-1 hover:text-gray-500 transition cursor-pointer">
<!--                           :class="{'fa-trash-can': stream.trashcan, 'fa-trash-can': !stream.trashcan}"-->
                        </i>
                        <i v-if="!is_admin && stream.statistics!==0" title="remove from statistics"
                           @click="clientEvent = {statistics: false, event_id: stream.id}; updateClientEvent()"
                           class="statistic--- fa-solid fa-xmark hover:text-gray-500 transition cursor-pointer"></i>
                        <i v-if="is_admin" title="client comments"
                           @click="getComments(stream.id)"
                           class="comments--- fa-solid fa-comment mr-1 hover:text-gray-500 transition cursor-pointer"></i>
                        <i v-if="is_admin" title="edit"
                           @click="showStreamEdit(stream)"
                           class="edit--- fa-solid fa-pencil mr-1 hover:text-gray-500 transition cursor-pointer"></i>
                        <i v-if="is_admin" title="delete"
                           @click="deleteEvent(stream)"
                           class="delete--- fa-solid fa-xmark hover:text-gray-500 transition cursor-pointer"></i>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

        <div class="---pagination--- mt-4 flex justify-center">
            <div class="flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul class="flex list-style-none">
                        <li v-if="currentPage>1" class="page-item">
                            <a @click="currentPage--; streams= events[currentPage-1]; updateURL()"
                               class="cursor-pointer page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                               aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li v-for="i in totalPage" class="page-item">
                            <a v-if="(currentPage-2>1 && i===currentPage-2) || (currentPage+2<totalPage && i===currentPage+2)"
                               class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 cursor-default">
                                ...
                            </a>
                            <a v-else @click="currentPage=i; streams=events[currentPage-1]; updateURL()"
                               class="cursor-pointer page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded  hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                               :class="{'bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md': i===currentPage, 'hidden': i>1 && i<totalPage && (i<currentPage-1 || i>currentPage+1)}">
                                {{ i }}
                            </a>
                        </li>
                        <li v-if="currentPage<totalPage" class="page-item">
                            <a @click="currentPage++; streams= events[currentPage-1]; updateURL()"
                               class="cursor-pointer page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                               aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="modal-windows">
        <vue-final-modal v-model="modal.preview" classes="flex justify-center items-center"
                         content-class="w-auto relative flex flex-col max-h-full mx-4 p-4 border rounded bg-white">
            <button class="modal__close" @click="modal.preview=false">
                <i class="fa-solid fa-xmark text-2xl text-gray-900 hover:text-gray-600 transition"></i>
            </button>
            <span class="block text-lg font-medium mb-2 ml-2">Preview</span>
            <div class="">
                <div id="player"></div>
                <div class="w-full flex justify-end mt-3">
                    <CButton @click="modal.preview=false" v-bind:color="'gray'" class="px-5 py-2">Close</CButton>
                </div>
            </div>
        </vue-final-modal>
        <vue-final-modal v-model="modal.comments" classes="flex justify-center items-center"
                         content-class="w-1/2 relative flex flex-col max-h-full mx-4 p-4 border rounded bg-white">
            <button class="modal__close" @click="modal.comments=false"><i
                class="fa-solid fa-xmark text-2xl text-gray-900 hover:text-gray-600 transition"></i></button>
            <modal-comments v-bind:comments="comments" v-bind:server_name="server_name"></modal-comments>
            <div class="w-full flex justify-end mt-3">
                <CButton @click="modal.comments=false" v-bind:color="'gray'" class="px-5 py-2">Close</CButton>
            </div>
        </vue-final-modal>
        <vue-final-modal v-model="modal.editStream" classes="flex justify-center items-center"
                         content-class="w-7/12 relative flex flex-col max-h-full mx-4 p-4 border rounded bg-white">
            <button class="modal__close" @click="modal.editStream = false"><i
                class="fa-solid fa-xmark text-2xl text-gray-900 hover:text-gray-600 transition"></i></button>

            <span
                class="block text-xl font-medium mb-3 ml-2">{{ editStream.id ? 'Edit rtmp://'+conf.ip+':1935/' + conf.server_name + '/' + editStream.stream_id : 'Add event' }}</span>
            <form class="">
                <div class="mb-5 flex justify-between">
                    <div class="sport w-1/2 mr-1">
                        <label for="sport" class="block mb-2 ml-2 text-mb font-medium text-gray-900 dark:text-white">Sport</label>
                        <select v-model="editStream.sport_id" id="sport"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                required>
                            <option v-for="sport in sports" :value="sport.id">{{ sport.name }}</option>
                        </select>
                    </div>
                    <div class="tournament w-1/2 ml-1">
                        <label for="tournament"
                               class="block mb-2 text-mb font-medium text-gray-900 ml-2">Tournament</label>
                        <input type="text" id="tournament" v-model="editStream.tournament"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                               required>
                    </div>
                </div>
                <div class="mb-5">
                    <div class="event">
                        <label for="event" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Event</label>
                        <input type="text" id="event" v-model="editStream.event"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                               required>
                    </div>
                </div>
                <div class="mb-5 flex justify-between">
                    <div class="date w-5/12">
                        <label for="date" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Date</label>
                        <input type="date" id="date" v-model="editStream.date"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                               required>
                    </div>
                    <div class="start w-3/12">
                        <label for="start" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Start</label>
                        <input type="time" id="start" v-model="editStream.start_time"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                               required>
                    </div>
                    <div class="end w-3/12">
                        <label for="end" class="block mb-2 text-mb font-medium text-gray-900 ml-2">End</label>
                        <input type="time" id="end" v-model="editStream.end_time"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                               required>
                    </div>
                </div>
                <div class="mb-5 flex justify-between">
                    <div class="server_id w-5/12">
                        <label for="server_id"
                               class="block mb-2 text-mb font-medium text-gray-900 ml-2">ServerId</label>
                        <input type="text" id="server_id" v-model="editStream.server_id"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                               required>
                    </div>
                    <div class="stream_id w-2/12">
                        <label for="stream_id"
                               class="block mb-2 text-mb font-medium text-gray-900 ml-2">StreamId</label>
                        <input type="text" id="stream_id" v-model="editStream.stream_id"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                               required>
                    </div>
                    <div class="status w-2/12">
                        <label for="status" class="block mb-2 ml-2 text-mb font-medium text-gray-900 dark:text-white">Status</label>
                        <select v-model="editStream.status" id="status"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                required>
                            <option value="LIVE">LIVE</option>
                            <option value="FINISHED">FINISHED</option>
                            <option value="SCHEDULED">SCHEDULED</option>
                            <option value="CANCELED">CANCELED</option>
                        </select>
                    </div>
                    <div class="resolution w-2/12">
                        <label for="resolution"
                               class="block mb-2 ml-2 text-mb font-medium text-gray-900 dark:text-white">Rresolution</label>
                        <select v-model="editStream.resolution" id="resolution"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                required>
                            <option value="SD">SD</option>
                            <option value="HD">HD</option>
                            <option value="FullHD">FullHD</option>
                        </select>
                    </div>
                </div>
                <div class="mb-5 flex justify-between">
                    <div class="comment w-1/2 mr-1">
                        <label for="comment" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Comment</label>
                        <input type="text" id="comment" v-model="editStream.comment"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
                    </div>
                    <div class="Source w-1/2 ml-1">
                        <label for="source" class="block mb-2 text-mb font-medium text-gray-900 ml-2">Source url</label>
                        <input type="text" id="source" v-model="editStream.source"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
                    </div>
                </div>

                <div class="flex justify-between">
                    <CButton v-if="editStream.id" @click.prevent="updateEvent()" class="px-7 py-1.5 text-lg">Save</CButton>
                    <CButton v-else @click.prevent="addEvent()" class="px-7 py-1.5 text-lg">Save</CButton>
                    <CButton @click.prevent="modal.editStream=false" :color="'gray'" class="px-6 py-1.5 text-lg">Close</CButton>
                </div>
            </form>
        </vue-final-modal>
        <vue-final-modal v-model="modal.statistics" classes="flex justify-center items-center"
                         content-class="w-1/3 relative flex flex-col max-h-full mx-4 p-4 border rounded bg-white">
            <button class="modal__close" @click="modal.statistics = false">
                <i class="fa-solid fa-xmark text-2xl text-gray-900 hover:text-gray-600 transition"></i>
            </button>
            <span class="block text-lg font-medium mb-5 ml-2">Get statistics</span>
            <div class="">
                <div class="w-full mb-6 flex justify-between">
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
                <div class="flex mb-6">
                    <div class="flex items-center mr-5">
                        <input v-model="statistics.take" id="default-checkbox" type="checkbox" value=""
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Taken</label>
                    </div>
                    <div class="flex items-center">
                        <input v-model="statistics.comment" id="checked-checkbox" type="checkbox" value=""
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">With
                            comments</label>
                    </div>
                </div>
                <div class="flex justify-between">
                    <c-button class="px-5 py-1" @click="getStatistics()">Download</c-button>
                    <c-button :color="'gray'" class="px-5 py-1" @click="modal.statistics = false">Close</c-button>
                </div>
            </div>


        </vue-final-modal>
        <vue-final-modal v-model="modal.addStreamExcel" classes="flex justify-center items-center"
                         content-class="w-1/3 relative flex flex-col max-h-full mx-4 p-4 border rounded bg-white">
            <button class="modal__close" @click="modal.addStreamExcel=false">
                <i class="fa-solid fa-xmark text-2xl text-gray-900 hover:text-gray-600 transition"></i>
            </button>
            <span class="block text-lg font-medium mb-5 ml-2">Add events</span>
            <div class="">
                <div class="mb-2 flex">
                    <label class="block">
                        <span class="sr-only">Upload excel file</span>
                        <input  @change="onChangeFile" type="file" class="block w-full text-sm text-slate-500
                          file:px-5 file:py-1
                          file:mr-4 file:py-2 file:px-4
                          file:rounded file:border-0
                          file:text-sm file:font-medium
                          file:bg-gray-700 file:text-white
                          hover:file:bg-gray-800
                        "/>
                    </label>
                    <i v-if="excel.streams" @click="streams_import()" class="text-lg block fa-solid fa-check hover:text-gray-500 transition cursor-pointer"></i>
                </div>
                <div class="flex justify-between">
                    <div class=""></div>
                    <CButton @click="streams_import()" :color="'gray'" class="px-5 py-1 text-md">Save</CButton>
                </div>
            </div>
        </vue-final-modal>
        <vue-final-modal v-model="modal.link" classes="flex justify-center items-center"
                         content-class="w-1/3 relative flex flex-col max-h-full mx-4 p-4 border rounded bg-white">
            <button class="modal__close" @click="modal.link=false">
                <i class="fa-solid fa-xmark text-2xl text-gray-900 hover:text-gray-600 transition"></i>
            </button>
<!--            <span class="block text-lg font-medium mb-2 ml-2">Link:</span>-->
            <div class="my-6 ml-3">
                <span class="text-lg font-medium">Link:</span> <a @click="copy('rtmp://'+conf.ip+':1935/' + conf.server_name + '/'+showId)" class="ml-2 text-lg font-medium text-gray-500 hover:text-gray-400 transition cursor-pointer" title="copy">{{'rtmp://'+conf.ip+':1935/' + conf.server_name +'/'+showId}}</a>
<!--                <div class="w-full flex justify-end mt-3">-->
<!--                    <CButton @click="modal.link=false" v-bind:color="'gray'" class="px-5 py-2">Close</CButton>-->
<!--                </div>-->
            </div>
        </vue-final-modal>
        <Notification v-if="!is_admin"></Notification>
    </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {ref} from 'vue';
import Layout from '@/Components/Layout.vue'
import CButton from '@/Components/UI/CButton.vue'
import Notification from '@/Components/Notification.vue'
import ModalComments from '@/Components/ModalComments.vue'
import {$vfm, VueFinalModal, ModalsContainer} from 'vue-final-modal'

export default {
    layout: Layout,
    components: {
        VueFinalModal,
        ModalsContainer,
        Datepicker,
        CButton,
        ModalComments,
        Notification
    },
    props:{
        authUser:Object,
    },
    data() {
        return {
            is_admin: 1,
            modal: {
                preview: false,
                comments: false,
                editStream: false,
                statistics: false,
                addStreamExcel: false,
                link: false,
            },
            excel: {
                streams: '',
                statistics: '',
            },
            statistics: {
                startDate: '',
                endDate: '',
                take: true,
                comment: true,
            },
            filter: 'All',
            sort: 'date',
            filter_date: '2023-01-01',
            date: '2023-01-01',

            currentPage: 1,
            totalPage: 1,

            showServer: '',
            showId: '',
            editStream: {},

            streams: {},
            sports: [
                {"id": 1, "name": "Football"},
                {"id": 2, "name": "Hockey"},
                {"id": 3, "name": "Table tennis"},
                {"id": 4, "name": "Tennis"},
                {"id": 5, "name": "Padel tennis"},
                {"id": 6, "name": "Basketball"},
                {"id": 7, "name": "Volleyball"},
                {"id": 8, "name": "Esports"},
                {"id": 9, "name": "American Football"},
                {"id": 10, "name": "Handball"},
                {"id": 11, "name": "Winter sports"},
                {"id": 12, "name": "Darts"},
                {"id": 13, "name": "Rugby"},
                {"id": 14, "name": "Snooker"},
                {"id": 15, "name": "Floorball"},
                {"id": 16, "name": "Futsal"},
                {"id": 17, "name": "Bandy"},
                {"id": 18, "name": "Beach volleyball"},
                {"id": 19, "name": "Badminton"},
                {"id": 20, "name": "Beach soccer"},
                {"id": 21, "name": "Other"}
            ],

            server_name: '',
            events: {},
            comments:{},
            clientEvent:{},
            conf: {
                ip: "",
                server_name: "",
            },
            sldpPlayer: {},
        }
    },
    setup() {
        const date = ref();
        const format = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
        return {
            date,
            format,
        }
    },
    methods: {
        onChangeFile(event) {
            this.excel.streams=event.target.files[0];
        },
        formatDate(date) {
            return date.toLocaleDateString();
        },
        editComment(id) {
            const btn = document.getElementById("commentBtn" + id);
            const btnSave = document.getElementById("commentBtnSave" + id);
            const input = document.getElementById("commentChange" + id);
            const span = document.getElementById("comment" + id);
            btn.classList.add('hidden');
            span.classList.add('hidden');
            btnSave.classList.remove('hidden');
            input.classList.remove('hidden');
            input.focus();
        },
        saveComment(id, stream) {
            const btn = document.getElementById("commentBtn" + id);
            const btnSave = document.getElementById("commentBtnSave" + id);
            const input = document.getElementById("commentChange" + id);
            const span = document.getElementById("comment" + id);
            this.editStream=stream;
            this.updateEvent();
            this.editStream={};
            btnSave.classList.add('hidden');
            input.classList.add('hidden');
            btn.classList.remove('hidden');
            span.classList.remove('hidden');
        },
        editClientComment(id, stream) {
            const btn = document.getElementById("commentClientBtn" + id);
            const btnSave = document.getElementById("commentClientBtnSave" + id);
            const input = document.getElementById("commentClientChange" + id);
            const span = document.getElementById("commentClient" + id);
            btn.classList.add('hidden');
            span.classList.add('hidden');
            btnSave.classList.remove('hidden');
            input.classList.remove('hidden');
            input.focus();
        },
        saveClientComment(id, stream) {
            const btn = document.getElementById("commentClientBtn" + id);
            const btnSave = document.getElementById("commentClientBtnSave" + id);
            const input = document.getElementById("commentClientChange" + id);
            const span = document.getElementById("commentClient" + id);
            this.clientEvent = {
                comment: stream.client_comment,
                add_comment: new Date().toISOString().split('T')[0],
                event_id: stream.id,
            }
            this.updateClientEvent();
            btnSave.classList.add('hidden');
            input.classList.add('hidden');
            btn.classList.remove('hidden');
            span.classList.remove('hidden');
        },
        editClientId(id, stream) {
            const btn = document.getElementById("idClientBtn" + id);
            const btnSave = document.getElementById("idClientBtnSave" + id);
            const input = document.getElementById("idClientChange" + id);
            const span = document.getElementById("idClient" + id);
            btn.classList.add('hidden');
            span.classList.add('hidden');
            btnSave.classList.remove('hidden');
            input.classList.remove('hidden');
            input.focus();
        },
        saveClientId(id, stream) {
            const btn = document.getElementById("idClientBtn" + id);
            const btnSave = document.getElementById("idClientBtnSave" + id);
            const input = document.getElementById("idClientChange" + id);
            const span = document.getElementById("idClient" + id);
            this.clientEvent = {
                personal_id: stream.personal_id,
                event_id: stream.id,
            }
            this.updateClientEvent();
            btnSave.classList.add('hidden');
            input.classList.add('hidden');
            btn.classList.remove('hidden');
            span.classList.remove('hidden');
        },
        add_filter(value) {
            this.filter = value;
            if(value === 'Today'){
                this.filter = 'Date';
                this.filter_date = new Date().toISOString();
                this.filter_date = this.filter_date.split('T')[0];
                this.updateURL();
                this.filter = 'Today';
            }else{
                this.updateURL();
            }
        },
        change_date() {
            this.filter = 'Date';
            this.filter_date = new Date(this.date).toISOString();
            this.filter_date = this.filter_date.split('T')[0];
            this.updateURL();
        },
        updateURL() {
            let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            let newUrl = baseUrl + '?filter=' + this.filter + '&sort=' + this.sort + '&date=' + this.filter_date + '&page=' + this.currentPage;
            history.pushState(null, null, newUrl);
            this.getEvents();
        },
        initPlayer() {
            // this.sldpPlayer.destroy();
            let url = "ws://"+String(this.conf.ip)+":8081/"+String(this.conf.server_name)+"/"+String(this.showId);
            // console.log(url);
            this.sldpPlayer = SLDP.init({
                container: 'player',
                // stream_url: "ws://"+"176.99.135.20:8081"+"/"+"Bet"+"/"+"123321",
                stream_url: "ws://"+String(this.conf.ip)+":8081/"+String(this.conf.server_name)+"/"+String(this.showId),
                height: window.innerHeight / 2,
                width: window.innerWidth / 2.5,
                autoplay: true,
                // muted: true,
            });
        },

        previewPlay(server, id) {
            this.showServer = server;
            this.showId = id;
            this.sldpPlayer.destroy();
            this.initPlayer();
            this.modal.preview = true;
        },
        showComment(serverId, streamId) {
            this.showServer = serverId;
            this.showId = streamId;
            this.modal.comments = true;
        },
        showStreamEdit(stream) {
            this.modal.editStream = true;
            this.editStream = stream;
        },
        showLink(stream){
            this.showServer = this.server_name;
            this.showId = stream.stream_id;
            this.modal.link = true;
        },

        async streams_import(){
            try {
                const response = await axios.post('api/events/import', {events: this.excel.streams}, {headers:{'Content-Type':'multipart/form-data'}});
                this.modal.addStreamExcel=false;
                this.getEvents();
            }catch (e){
                console.log(e);
            }
        },

        async getEvents(){
            // console.log('get');
            try {
                const response = await axios.post('api/events', { filter: this.filter, sort:this.sort, filter_date:this.filter_date });
                this.events = response.data;
                this.totalPage = response.data.length;
                let search = window.location.search;
                if(search){
                    search = search.split('&');
                    let page = search[3].split('=')[1];
                    if(!page){
                        this.currentPage = 1;
                    }
                    // this.currentPage = page;
                } else this.currentPage = 1;
                this.streams = this.events[this.currentPage - 1];
            }catch (e){
                console.log(e);
            }
        },
        async updateEvent(){
            try {
                const response = await axios.post('api/events/edit', this.editStream);
                this.modal.editStream=false;
                this.getEvents();
            }catch (e){
                if(e.response.status < 500){
                    alert(e.response.data.message);
                }
                else alert('An error has occurred! Try again.');
            }
        },
        async getComments(id){
            try {
                const response = await axios.post('api/events/comments', {'id': id});
                this.comments= response.data;
                this.modal.comments=true;
            }catch (e){
                console.log(e);
            }
        },
        async deleteEvent(stream){
            if(confirm("Are you sure?")){
                try {
                    const response = await axios.post('api/events/delete', {'id': stream.id});
                    this.getEvents();
                }catch (e){
                    console.log(e);
                }
            }
        },
        async addEvent(){
            try {
                const response = await axios.post('api/events/add', this.editStream);
                this.modal.editStream=false;
                this.getEvents();
            }catch (e){
                if(e.response.status < 500){
                    alert(e.response.data.message);
                }
                else alert('An error has occurred! Try again.');
            }
        },
        async updateClientEvent(){
            try {
                const response = await axios.post('api/events/client/edit', this.clientEvent);
                this.modal.editStream=false;
                this.clientEvent = {};
                this.getEvents();
            }catch (e){
                console.log(e);
                alert('Check the entered data!');
            }
        },
        async getServerName(){
            try {
                const response = await axios.get('api/events/servername');
                this.server_name=response.data;
            }catch (e){
                console.log(e);
            }
        },
        getStatistics(){
            const url = 'api/statistics'+'?start_date='+this.statistics.startDate+'&end_date='+this.statistics.endDate+'&taken='+Number(this.statistics.take)+'&comment='+Number(this.statistics.comment);
            window.location.href = url;
            this.modal.statistics=false;
        },
        copy(value){
            // navigator.clipboard.writeText(value);
            const textArea = document.createElement("textarea");
            textArea.value = value;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Unable to copy to clipboard', err);
            }
            document.body.removeChild(textArea);
        },
        async getConf(){
            try {
                const response = await axios.get('/api/conf');
                this.conf = response.data;
                this.initPlayer();
            }catch (e){
                console.log(e);
            }
        },
    },
    mounted() {
        let search = window.location.search;
        if(search){
            search = search.split('&');
            let filter = search[0].split('=')[1];
            let sort = search[1].split('=')[1];
            let filter_date = search[2].split('=')[1];
            let page = search[3].split('=')[1];
            console.log(page);
            this.filter = filter;
            this.sort = sort;
            this.filter_date = filter_date;
            // this.currentPage = page;
        }
        this.getConf();
        if(this.authUser.role === 'client'){
            this.is_admin = false;
        }else {
            this.is_admin = true;
        }
        this.getEvents();
        this.getServerName();
        setInterval(
            () => {
                this.getEvents();
                // console.log('ok');
            },
            15000
        );
    }
}
</script>

<style>
.modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}

.input-date, .date-menu {
    font-size: 12px;
}
</style>
