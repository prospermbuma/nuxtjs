<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';

// Meta
definePageMeta({
    layout: "custom",
});

// SEO
useSeoMeta({
    title: "Salamu | About",
    ogTitle: "Salamu | About",
    description: "This is the about page.",
    ogDescription: "This is the about page.",
});

</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
    <div class="flex justify-center mt-10">
        <h1 class="text-2xl text-blue-400">About Us</h1>
    </div>
</template>