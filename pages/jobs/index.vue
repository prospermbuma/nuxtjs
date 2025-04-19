<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
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
    <ul class="text-xl text-blue-400">
      <li>
        <NuxtLink to="/jobs/1">Job 1</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/jobs/2">Job 2</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/jobs/3">Job 3</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/jobs/4">Job 4</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/jobs/5">Job 5</NuxtLink>
      </li>
    </ul>
  </div>
</template>