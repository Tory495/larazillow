<template>
  <MainLayout>
    <div>
      <h1>Index page</h1>
      <Link href="/hello">Show page</Link>
      <div>The message is: {{ message }}</div>
      <div>Timer is: {{ timer }}</div>
    </div>
  </MainLayout>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";
import MainLayout from "../../Layouts/MainLayout.vue";
defineProps({
  message: String,
});
const timer = ref(0);
setInterval(() => timer.value++, 1000);
</script>