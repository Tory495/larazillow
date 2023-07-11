<template>
  <div>
    <Link href="/listing">Listings</Link>
    <Link href="/listing/create">New Listing</Link>
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