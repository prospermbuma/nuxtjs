<!-- ===============================================
# SCRIPT
=================================================-->
<script setup>
const { $salamu } = useNuxtApp();
</script>

<!-- ===============================================
# TEMPLATE
=================================================-->
<template>
    <div class="flex flex-col justify-center items-center mt-20">
        <div class="bg-slate-200 text-slate-500 p-10 md:p-12 rounded-2xl relative">
            <h1 class="text-2xl md:text-4xl text-center"><span class="text-slate-600 font-extrabold">{{
                $salamu('Prosper') }}</span><br>This is a custom layout</h1>
            <div class=" absolute top-3 right-3 bg-amber-50 rounded-full p-1">
                <IconsBell class="text-2xl text-amber-500" />
            </div>
        </div>
        <slot />
    </div>
</template>