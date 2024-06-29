<script setup lang="ts">
import { cn } from '~/lib/utils';

const props = defineProps<{
  imgSrc: string;
  class?: string;
}>();

const POSSIBLE_ANIMATION_DELAYS = [
  '0s',
  '0.1s',
  '0.2s',
  '0.3s',
  '0.4s',
  '0.5s',
];

const animationDelay = computed(() => {
  return POSSIBLE_ANIMATION_DELAYS[
    Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
  ];
});
</script>

<template>
  <div
    :class="
      cn(
        'animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5',
        props.class
      )
    "
    :style="animationDelay"
  >
    <Phone :imgSrc="imgSrc" />
  </div>
</template>
