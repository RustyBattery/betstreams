<template>
    <button v-if="color === 'gray'" class="text-center font-medium w-auto rounded-lg transition focus:ring-4 focus:outline-none text-white bg-gray-400 hover:bg-gray-500 focus:ring-gray-200 btn"><slot /></button>
    <button v-else-if="color === 'light-gray'" class=" font-medium text-center text-gray-900 bg-gray-100 rounded border border-gray-300 transition hover:bg-blue-50 hover:text-blue-700 btn"><slot /></button>
    <button v-else-if="color === 'red'" class=" text-center font-medium w-auto rounded-lg transition focus:ring-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 btn"><slot /></button>
    <button v-else class="text-center font-medium w-auto rounded-lg transition focus:ring-4 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 btn"><slot /></button>
</template>

<script>
 export default {
     props:{
         color:{
             type: String,
         }
     }
 }
</script>
