<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
definePageMeta({
    middleware: "auth",
});

useSeoMeta({
    title: "Salamu | Profile",
    description: "This is the profile page.",
});
</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
    <div class="mt-20 flex justify-center items-center">
        <h1 class="text-2xl text-blue-400">My Profile: {{ $route.params.id }}</h1>
    </div>
</template>
