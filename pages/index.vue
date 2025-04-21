<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { useSeoMeta, useState } from 'nuxt/app';
import { useUtils } from '~/composables/useUtils';
const num: number = 1;
const { Greetings, capitaliza } = useUtils();
const capitalize = capitaliza('Tanzania');
const salamu = Greetings(capitalize);

useSeoMeta({
  title: "Salamu - Tanzania",
  description: "This is the homepage.",
});

// State Management
// const counter = useState('counter', () => Math.round(Math.random() * 1000));
const counter = useState('counter', () => 0);
const color = useColor();

const setNewColor = (newColor: string) => {
  color.value = newColor;
}

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
    <div class="mt-5 text-center">
      Counter: {{ counter }}
      <div class="mt-3 flex justify-between items-center gap-3">
        <Button
          class="bg-blue-500 text-white px-5 py-1 rounded-xl outline-none text-2xl font-bold cursor-pointer w-5 flex justify-center items-center"
          @click="counter++">+</Button>
        <Button
          class="bg-slate-500 text-white px-5 py-1 rounded-xl outline-none text-2xl font-bold cursor-pointer w-5 flex justify-center items-center"
          @click="counter--">-</Button>
      </div>
    </div>
    <div class="mt-5 text-center">
      Current Color: {{ color.charAt(0).toUpperCase() + color.slice(1).toLowerCase() }}
      <div class="mt-4 grid grid-cols-2 md:flex md:justify-between md:items-center gap-3">
        <Button
          class="bg-green-500 text-white px-5 py-2 rounded-xl outline-none text-md font-bold cursor-pointer w-auto flex justify-center items-center"
          @click="setNewColor('green')">Green</Button>
        <Button
          class="bg-slate-500 text-white px-5 py-2 rounded-xl outline-none text-md font-bold cursor-pointer w-auto flex justify-center items-center"
          @click="setNewColor('slate')">Slate</Button>
        <Button
          class="bg-blue-500 text-white px-5 py-2 rounded-xl outline-none text-md font-bold cursor-pointer w-auto flex justify-center items-center"
          @click="setNewColor('blue')">Blue</Button>
        <Button
          class="bg-red-500 text-white px-5 py-2 rounded-xl outline-none text-md font-bold cursor-pointer w-auto flex justify-center items-center"
          @click="setNewColor('red')">Red</Button>
      </div>
    </div>
  </div>
</template>
