<template>
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div>
      <div class="flex">
        <img
          class="w-5 h-5"
          src="src/assets/calender.svg"
          alt="calendar"
        />
        <input
          class="block w-full px-5 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="text"
        >
        <button>&times;</button>
      </div>
    </div>
    <main class="mt-4">
      <h3 class="text-sm font-semibold text-gray-900">Results: {{emails.length}}mail(s)</h3>

      <div class="sm:-mx-6 lg:-mx-8">
        <!-- <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"> -->
        <div class="mt-2 border-b border-gray-200 shadow sm:rounded-lg">
          <table class="block w-full divide-y divide-gray-200 table-fixed md:table">
            <thead class="block bg-gray-50 md:table-row-group">
              <tr class="flex w-full py-3 space-x-2 divide-x-2 divide-gray-900 divide-opacity-50 md:table-row md:divide-none">
                <th
                  scope="col"
                  class="px-6 text-xs font-bold tracking-wider text-left text-gray-600 md:py-3 md:w-1/5"
                >
                  From
                </th>
                <th
                  scope="col"
                  class="px-6 text-xs font-bold tracking-wider text-left text-gray-600 md:py-3 md:w-24p"
                >
                  To
                </th>
                <th
                  scope="col"
                  class="px-6 text-xs font-bold tracking-wider text-left text-gray-600 md:py-3 md:w-42p"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  class="relative hidden md:table-row"
                >
                  <span class="sr-only">Has attachment</span>
                </th>
                <th
                  scope="col"
                  class="px-6 text-xs font-bold tracking-wider text-left text-gray-600 cursor-pointer md:py-3 md:w-12p"
                  @click="isAsc = !isAsc"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <TableRow
                v-for="email in sortedEmails"
                :key="email.id"
                :email="email"
              />
            </tbody>
          </table>
        </div>
        <!-- </div> -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import emails from '../data/emails.json'
import TableRow from '../components/TableRow.vue'
import { Email } from '../types'

export default defineComponent({
  name: 'Home',
  components: {
    TableRow,
  },
  setup() {
    const isAsc = ref(false)

    const sortedEmails = computed<Email[]>(() => {
      if (isAsc.value) {
        return emails.sort((a: Email, b: Email) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
      } else {
        return emails.sort((a: Email, b: Email) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
      }
    })

    return { emails, isAsc, sortedEmails }
  },
})
</script>

<style>
</style>
