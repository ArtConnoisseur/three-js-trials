<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';

const props = defineProps({
  link: String
});

const route = useRoute();
const isActive = computed(() => route.path === props.link);
</script>

<template>
  <RouterLink :to="props.link" :class="`h-fit w-full flex items-center justify-right rounded-sm px-4 py-2 ${isActive ? 'bg-emerald-500 text-background' : ' hover:bg-emerald-500/20'}`">
    <slot />
  </RouterLink>
</template>