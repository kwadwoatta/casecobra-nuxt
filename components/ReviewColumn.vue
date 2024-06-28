<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  reviewClass: (reviewIndex: number) => string;
  reviews: string[];
  customClass: string;
  msPerPixel: number;
}>();

const columnRef = ref<InstanceType<typeof HTMLDivElement> | null>(null);
const columnHeight = ref(0);

const duration = computed(() => `${columnHeight.value * props.msPerPixel}ms`);

onMounted(() => {
  if (!columnRef.value) return;

  const resizeObserver = new ResizeObserver(() => {
    columnHeight.value = columnRef.value!.offsetHeight;
  });

  resizeObserver.observe(columnRef.value);

  onUnmounted(() => {
    resizeObserver.disconnect();
  });
});
</script>
  

<template>
  <div
    ref="columnRef"
    :class="['animate-marquee space-y-8 py-4', customClass]"
    :style="{ '--marquee-duration': duration }"
  >
    <Review
      v-for="(imgSrc, reviewIndex) in reviews?.concat(reviews)"
      :key="reviewIndex"
      :class="reviewClass(reviewIndex % reviews.length)"
      :imgSrc="imgSrc"
    />
  </div>
</template>