<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { title } from 'process';
// SEO  
definePageMeta({
  title: 'Salamu | Jobs',
})
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
      <Title>{{ title }}</Title>
      <Meta name="description" content="This is the jobs page." />
      <Meta property="og:description" content="This is the jobs page." />
      <Style>
        .jobs {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1em;
        }

        .job {
          background-color: #eff6ff;
          padding: 10px 24px;
          border-radius: 8px;
        }
      </Style>
    </Head>

  </div>
  <div class="flex justify-center mt-20">
    <ul class="text-xl text-blue-400 jobs grid">
      <li class="job">
        <NuxtLink to="/jobs/1">Job 1</NuxtLink>
      </li>
      <li class="job">
        <NuxtLink to="/jobs/2">Job 2</NuxtLink>
      </li>
      <li class="job">
        <NuxtLink to="/jobs/3">Job 3</NuxtLink>
      </li>
      <li class="job">
        <NuxtLink to="/jobs/4">Job 4</NuxtLink>
      </li>
      <li class="job">
        <NuxtLink to="/jobs/5">Job 5</NuxtLink>
      </li>
    </ul>
  </div>
</template>