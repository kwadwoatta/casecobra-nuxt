<script setup lang="ts">
import { cn, splitArray } from "@/lib/utils";
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

const containerRef = ref(null);
const isInView = useElementVisibility(containerRef, {
  // once: true,
  threshold: 0.4,
});
const columns = splitArray(PHONES, 3);
const column1 = columns[0];
const column2 = columns[1];
const column3 = splitArray(columns[2], 2);

const getReviewClass1 = (reviewIndex: number) => {
  return cn({
    "md:hidden": reviewIndex >= column1.length + column3[0].length,
    "lg:hidden": reviewIndex >= column1.length,
  });
};

const getReviewClass2 = (reviewIndex: number) => {
  return reviewIndex >= column2.length ? "lg:hidden" : "";
};
</script>
  

<template>
  <div
    :ref="containerRef"
    class="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
  >
    <ReviewColumn
      v-if="isInView"
      :reviews="column1.concat(column3.flat(), column2)"
      :reviewClass="getReviewClass1"
      :msPerPixel="10"
    />
    <ReviewColumn
      v-if="isInView"
      :reviews="column2.concat(column3[1])"
      customClass="hidden md:block"
      :reviewClass="getReviewClass2"
      :msPerPixel="15"
    />
    <ReviewColumn
      v-if="isInView"
      :reviews="column3.flat()"
      customClass="hidden md:block"
      :msPerPixel="10"
    />
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100"
    />
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100"
    />
  </div>
</template>
  