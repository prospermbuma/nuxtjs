<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';
import { useUtils } from '~/composables/useUtils';
const num: number = 1;
const { Greetings, capitaliza } = useUtils();
const capitalize = capitaliza('Tanzania');
const salamu = Greetings(capitalize);

useSeoMeta({
  title: "Salamu - Tanzania",
  description: "This is the homepage.",
});

</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
  <div class="flex justify-center items-center flex-col mt-20">
    <div class="text-center bg-blue-50 rounded-2xl p-7 md:p-10 shadow">
      <h1 class="text-4xl md:text-8xl">{{ salamu }}</h1>
      <div class="bg-amber-500 rounded-full p-2 h-10 w-10 md:h-15 md:w-15 m-auto mt-4 flex justify-center items-center">
        <IconsHandWave class="text-2xl md:text-3xl text-amber-50" />
      </div>
      <p class="mt-3 text-xl text-slate-500">You are the number {{ num }}</p>
    </div>
  </div>
</template>
