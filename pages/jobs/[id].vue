<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { useSeoMeta, useRoute, useNuxtApp } from 'nuxt/app';
const route = useRoute();
const nuxt = useNuxtApp();
console.log(nuxt);

useSeoMeta({
  title: "Salamu | Job",
  description: "This is the job page.",
});
</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
  <div class="flex justify-center mt-20">
    <h1 class="text-xl text-blue-400">Job: {{ route.params.id }}</h1>
  </div>
</template>