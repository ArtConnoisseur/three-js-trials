<script setup>
import { RouterView } from 'vue-router';
import LinkComponent from '@/router/LinkComponent.vue';
</script>

<template>
  <div class="w-[15%] flex flex-col p-4 gap-2 items-center">
    This is the sidebar
    <LinkComponent link="/basic">
      First Component
    </LinkComponent>
    <LinkComponent link="/first-text">
      First Text
    </LinkComponent>
  </div>
  <main class="w-[75%] h-screen">
    <RouterView/>
  </main>
</template>
