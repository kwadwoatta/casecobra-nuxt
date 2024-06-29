<script setup lang="ts">
import { cn } from '@/lib/utils';
</script>

<template>
  <div :class="cn('mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20')">
    <slot />
  </div>
</template>
