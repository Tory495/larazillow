<template>
    <div>
      <h1>Index page</h1>
      <Link href="/hello">Show page</Link>
      <div>The message is: {{ message }}</div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
defineProps({
  message: String,
});
</script>

<script>
import MainLayout from "../../Layouts/MainLayout.vue";
export default {
  layout: MainLayout,
};
</script>