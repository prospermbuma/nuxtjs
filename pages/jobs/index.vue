<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
// import { useSeoMeta } from 'nuxt/app';
// SEO
// useSeoMeta({
//   title: "Salamu | Jobs",
//   description: "This is the jobs page.",
// });
</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
  <div>
    <!-- SEO (Component Based SEO) -->

    <Head>
      <Title>Salamu | Jobs</Title>
      <Meta name="description" content="This is the jobs page." />
    </Head>

  </div>
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