<template>
  <div class="form-input-error">
    {{ props.errorMessage }}
  </div>
</template>

<script setup>
const props = defineProps({
  errorMessage: String,
})
</script>