<script setup lang="ts">
import { cn } from '@/lib/utils';

defineProps<{
  imgSrc: string;
  dark?: boolean;
}>();
</script>

<template>
  <div :class="cn('pointer-events-none relative z-50 overflow-hidden')">
    <img
      :src="
        dark
          ? '/phone-template-dark-edges.png'
          : '/phone-template-white-edges.png'
      "
      class="pointer-events-none z-50 select-none"
      alt="phone image"
    />

    <div class="absolute inset-0 -z-10">
      <img
        class="min-h-full min-w-full object-cover"
        :src="imgSrc"
        alt="overlaying phone image"
      />
    </div>
  </div>
</template>
