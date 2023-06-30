<template>
  <MainLayout>
    <div>
      <h1>Index page</h1>
      <Link href="/hello">Show page</Link>
      <div>The message is: {{ message }}</div>
    </div>
  </MainLayout>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

import MainLayout from "../../Layouts/MainLayout.vue";
defineProps({
  message: String,
});
</script>