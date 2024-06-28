<script setup lang="ts">
import { cn } from "@/lib/utils";

defineProps<{
  imgSrc: string;
  dark: boolean;
}>();
</script>

<template>
  <div :class="cn('relative pointer-events-none z-50 overflow-hidden')">
    <img
      :src="
        dark
          ? '/phone-template-dark-edges.png'
          : '/phone-template-white-edges.png'
      "
      class="pointer-events-none z-50 select-none"
      alt="phone image"
    />

    <div class="absolute -z-10 inset-0">
      <img
        class="object-cover min-w-full min-h-full"
        :src="imgSrc"
        alt="overlaying phone image"
      />
    </div>
  </div>
</template>


export default Phone
