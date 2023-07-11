<template>
  <div>
    <Link href="/">Main Page</Link>
    <Link href="/hello">Show Page</Link>
    <div v-if="flashSuccess" class="success">
      {{ flashSuccess }}
    </div>
    <slot>Default</slot>
  </div>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import {  computed } from 'vue'
const page = usePage()
const flashSuccess = computed(() => page.props.flash.success)
</script>

<style scoped>
.success {
  background-color: green;
  color: white;
}
</style>