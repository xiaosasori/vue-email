<template>
<div>
  <Home />
  <!-- <test/> -->
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './pages/Home.vue'
import test from './pages/test.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home,
    test
  }
})
</script>
