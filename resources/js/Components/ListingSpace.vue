<template>
  <div>
    <span class="font-bold">{{ listing.beds }}</span> bds
    <span class="text-gray-400">| </span>
    <span class="font-bold">{{ listing.baths }}</span> ba
    <span class="text-gray-400">| </span>
    <span class="font-bold">{{ listing.area }} m<sup>2</sup></span>
  </div>
</template>

<script setup>
defineProps({
  listing: Object,
});
</script>