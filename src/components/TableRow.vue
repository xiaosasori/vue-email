<template>
  <tr
    v-bind="$attrs"
    @click="isExpand = !isExpand"
    class="flex flex-wrap w-screen cursor-pointer md:w-full group hover:text-blue-700 md:table-row"
  >
    <td class="flex-auto px-6 py-4 text-sm font-medium text-gray-900 truncate group-hover:text-blue-700">
      {{email.from}}
    </td>
    <td class="flex-auto order-1 w-full px-6 py-4 text-sm text-gray-900 group-hover:text-blue-700">
      <div class="flex justify-between space-x-6">
        <span class="inline-block truncate">{{ email.to[0] }}<span v-if="email.to.length > 1">, ...</span></span>
        <span
          v-if="email.to.length > 1"
          class="bg-gray-500 text-white font-semibold rounded-md px-1 py-0.5"
        >+{{email.to.length - 1}}</span>
        <span
          v-else
          aria-hidden="true"
          class="px-1 py-0.5 opacity-0 pointer-events-none"
        >+0</span>
      </div>
    </td>
    <td class="order-2 px-6 py-4 text-sm text-gray-900 truncate group-hover:text-blue-700">
       {{ email.subject }}
    </td>
    <td class="text-sm font-medium text-right order-0 group-hover:text-blue-700">
      <template v-if="email.hasAttachment">
        <img
          aria-hidden="true"
          class="flex w-5 h-5"
          src="src/assets/icon_clip.svg"
          alt="attachment image"
        >
        <span class="sr-only">This email has attachment</span>
      </template>
    </td>
    <td class="px-6 py-4 text-sm font-semibold text-gray-900 truncate order-0 group-hover:text-blue-700">
      {{ formattedDate}}
    </td>
  </tr>
  <transition
    enter-from-class="max-h-0"
    enter-to-class="max-h-full"
    enter-active-class="duration-200 transtion ease"
    appear
  >
    <tr v-show="isExpand">
      <td
        colspan="5"
        class="px-6 py-4 text-sm font-medium text-gray-900"
      >
        {{email.body}}
      </td>
    </tr>
  </transition>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TableRow',
  props: {
    email: {
      type: Object,
      required: true,
    },
  },
  setup: (props) => {
    const isExpand = ref(false)
    const formattedDate = computed(() => {
      return new Date(props.email.date).toLocaleDateString()
    })

    return { isExpand, formattedDate }
  },
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
