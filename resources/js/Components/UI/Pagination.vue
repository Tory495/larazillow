<template>
  <div class="flex gap-1">
    <Link
      v-for="(link, index) in links"
      :key="index"
      class="py-2 px-4 rounded-md"
      :href="link.url ?? ''"
      :as="link.url ? 'a' : 'button'"
      :class="{ 'bg-indigo-600 hover:bg-indigo-500 text-gray-300': link.active }"
      :disabled="!link.url"
      v-html="link.label"
    />
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { defineProps } from 'vue'

defineProps({
  links: Array,
})
</script>