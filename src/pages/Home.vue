<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div>
      <div class="flex">
        <img class="h-5 w-5" src="src/assets/calender.svg" alt="calendar" />
        <input class="py-2 px-5 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" type="text" >
        <button>&times;</button>
      </div>
    </div>
    <main>
      <h3 class="text-xl font-semibold text-gray-600">Results: 10 mail(s)</h3>


    <!-- <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"> -->
        <div class="shadow border-b border-gray-200 sm:rounded-lg">
          <table class="divide-y divide-gray-200 w-full table-fixed">
            <thead class="bg-gray-50">
              <tr>
                <th style="width: 22%" scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                  From
                </th>
                <th style="width: 22%" scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                  To
                </th>
                <th style="width: 44%" scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Subject
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Has attachment</span>
                </th>
                <th style="width: 10%" scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <TableRow v-for="email in emails" :key="email.id" :email="email" />
            </tbody>
          </table>
         </div>
      <!--</div>
    </div> -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import emails from '../data/emails.json'
import TableRow from '../components/TableRow.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TableRow
  },
  setup() {
    return {emails}
  }
})
</script>

<style>

</style>
