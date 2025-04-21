<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { useSeoMeta, useState } from 'nuxt/app';
import { useUtils } from '~/composables/useUtils';
import { useColor } from '~/composables/states';
import { useCounterStore } from '~/stores/counter';
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';

const num: number = 1;
const { Greetings, capitaliza } = useUtils();
const capitalize = capitaliza('Tanzania');
const salamu = Greetings(capitalize);

useSeoMeta({
  title: "Salamu - Tanzania",
  description: "This is the homepage.",
});

// ======= State Management =======
// Local state
// const counter = useState('counter', () => Math.round(Math.random() * 1000));
const counter = useState<number>('counter', () => 0);

// Global state
const color = useColor();
const setNewColor = (newColor: string) => {
  color.value = newColor;
}

// Pinia
const store = useCounterStore();
const { count, name, doubleCount } = storeToRefs(store);
const { increment, setName } = store;

const uname = useState<string>('uname', () => '');

const data = ref(null);

onMounted(async () => {
  try {
    data.value = await $fetch('/api/test');
  } catch (err) {
    console.error('Error fetching test: ', err);
  }
});

const { data: yaliyomo } = await useFetch("/api/users");
const yamo = toRaw(yaliyomo.value);
console.log(yamo);

const { data: vilivyomo, pending } = await useLazyFetch("/api/users");
const vimo = toRaw(vilivyomo.value);
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
          class="bg-blue-500 text-white px-5 py-1 rounded-xl outline-0 text-2xl font-bold cursor-pointer w-5 flex justify-center items-center"
          @click="counter++">+</Button>
        <Button
          class="bg-slate-500 text-white px-5 py-1 rounded-xl outline-0 text-2xl font-bold cursor-pointer w-5 flex justify-center items-center"
          @click="counter--">-</Button>
      </div>
    </div>
    <div class="mt-5 text-center">
      Current Color: {{ color.charAt(0).toUpperCase() + color.slice(1).toLowerCase() }}
      <div class="mt-4 grid grid-cols-2 md:flex md:justify-between md:items-center gap-3">
        <Button
          class="bg-green-500 text-white px-5 py-2 rounded-xl outline-0 text-md font-bold cursor-pointer w-auto flex justify-center items-center"
          @click="setNewColor('green')">Green</Button>
        <Button
          class="bg-slate-500 text-white px-5 py-2 rounded-xl outline-0 text-md font-bold cursor-pointer w-auto flex justify-center items-center"
          @click="setNewColor('slate')">Slate</Button>
        <Button
          class="bg-blue-500 text-white px-5 py-2 rounded-xl outline-0 text-md font-bold cursor-pointer w-auto flex justify-center items-center"
          @click="setNewColor('blue')">Blue</Button>
        <Button
          class="bg-red-500 text-white px-5 py-2 rounded-xl outline-0 text-md font-bold cursor-pointer w-auto flex justify-center items-center"
          @click="setNewColor('red')">Red</Button>
      </div>
    </div>
    <div class="mt-5 grid grid-cols-1">
      <p>Count: {{ count }}</p>
      <p>Name: {{ name }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <input type="text" v-model="uname" placeholder="Name"
        class="bg-slate-200 py-3 px-5 rounded-xl mt-4 mb-2 outline-0">
      <div class="flex justify-between items-center gap-4">
        <Button
          class="bg-blue-500 text-white px-5 py-2 rounded-xl outline-0 text-md font-bold cursor-pointer w-auto flex justify-center items-center mt-2"
          @click="increment">Increase</Button>
        <Button
          class="bg-slate-500 text-white px-5 py-2 rounded-xl outline-0 text-md font-bold cursor-pointer w-auto flex justify-center items-center mt-2"
          @click="setName(uname)">Change</Button>
      </div>
      <br>
      {{ data }}
    </div>
    <div class="mt-5 p-10 bg-amber-100 w-auto sm:w-1/2 rounded">
      <h1 class="text-2xl font-extrabold text-slate-700 mb-1">Users:</h1>
      <p> {{ pending ? 'Loading...' : vimo }}</p>
    </div>
  </div>
</template>
