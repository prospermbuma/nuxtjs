<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';

const { data: contact } = await useAsyncData(() => queryCollection('content').path('/').first());

useSeoMeta({
    title: "Salamu | Contact",
    description: "This is the contact page.",
});
</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
    <div class="flex flex-col justify-center items-center mt-20">
        <h1 class="text-2xl text-blue-400">Contact Us</h1>
        <ContentRenderer class="mt-7" v-if="contact" :value="contact" />
        <div v-else>Contact not found</div>
    </div>
</template>