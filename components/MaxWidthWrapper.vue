<script setup lang="ts">
import { cn } from '@/lib/utils';
const props = defineProps<{ class: string }>();
</script>

<template>
  <div
    :class="
      cn('mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20', props.class)
    "
  >
    <slot />
  </div>
</template>
