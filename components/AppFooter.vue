<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
    <!-- <div :class="{'h-20 mt-20 bg-blue-50 flex justify-center items-center w-full': true,'absolute bottom-0': route.path !== '/'}"> -->
    <div :class="['h-20 mt-20 bg-blue-50 flex justify-center items-center w-full', route.path !== '/' ? 'absolute bottom-0' : '']">
        <p class="text-center">&copy; {{ new Date().getFullYear() }} nuxt-pro, All Rights Reserved.</p>
    </div>
</template>