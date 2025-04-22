<!-- ===============================================
# SCRIPT
=================================================-->
<script setup lang="ts">
import { useHead } from 'nuxt/app';

// SEO
useHead({
  title: 'Salamu TZ',
  meta: [
    { name: 'description', content: 'Salamu Tanzania App' }
  ],
});
</script>
<!-- ===============================================
# TEMPLATE | MAIN LAYOUT
=================================================-->
<template>
  <div>
    <AppNavbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>
