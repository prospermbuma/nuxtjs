<script setup lang="ts">
const route = useRoute();
</script>
<template>
    <h1>Job: {{route.params.id}}</h1>
</template>