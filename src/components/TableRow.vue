<template>
  <tr>
    <td class="px-6 py-4 text-sm font-medium text-gray-900">
      <p class="truncate">{{ email.from }}</p>
      <!-- <p class="truncate w-40">{{ email.from }}</p> -->
    </td>
    <td class="px-6 py-4 text-sm text-gray-500 ">
      <div class="flex justify-between space-x-6">
        <span class="inline-block truncate">{{ email.to[0] }}<span v-if="email.to.length > 1">, ...</span></span>
        <!-- <span class="inline-block w-52 truncate">{{ email.to[0] }}<span v-if="email.to.length > 1">, ...</span></span> -->
        <span v-if="email.to.length > 1" class="bg-gray-500 text-white font-semibold rounded-md px-1 py-0.5">+{{email.to.length - 1}}</span>
        <span v-else aria-hidden="true" class="px-1 py-0.5 opacity-0 pointer-events-none">+0</span>
      </div>
    </td>
    <td class="px-6 py-4 text-sm text-gray-500" style="column-width: 44%">
      <p class="truncate">
        {{ email.subject }}
      </p>
    </td>
    <td class="text-right text-sm font-medium">
      <template v-if="email.hasAttachment">
        <img aria-hidden="true" class="w-5 h-5 flex" src="src/assets/icon_clip.svg" alt="attachment">
        <span class="sr-only">This email has attachment</span>
      </template>
    </td>
    <td class="px-6 py-4 text-sm text-gray-500">
      {{ formattedDate}}
    </td>
  </tr>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TableRow',
  props: {
    email: {
      type: Object,
      required: true
    }
  },
  setup: (props) => {
    const count = ref(0)
    const formattedDate = computed(() => {
      return new Date(props.email.date).toLocaleDateString()
    })
    return { count, formattedDate }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
