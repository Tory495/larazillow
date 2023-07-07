<template>
  <span>
    {{ listing.city }}
  </span>
</template>

<script setup>
defineProps({
  listing: Object,
})
</script>