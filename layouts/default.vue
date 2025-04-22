<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { useRoute } from 'vue-router';

const route = useRoute();

useHead({
  meta: [{ property: 'og:title', content: `${route.meta.title}` }]
});
</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
    <div>
        <slot />
    </div>
</template>