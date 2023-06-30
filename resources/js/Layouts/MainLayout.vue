<template>
  <div>
    <Link href="/">Main Page</Link>
    <Link href="/hello">Show Page</Link>
    <slot>Default</slot>
  </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
</script>