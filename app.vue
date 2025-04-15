<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
const num: Number = 1;
const name: String = 'Tanzania';
</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
  <div class="mt-20 flex justify-center items-center flex-col">
    <div class="text-center bg-blue-50 rounded-2xl p-10 shadow-md">
      <h1 class="text-4xl md:text-8xl">Hello, {{ name }}!</h1>
      <p class="mt-2 text-xl text-blue-500">You are the number {{ num }}</p>
    </div>
  </div>
</template>
