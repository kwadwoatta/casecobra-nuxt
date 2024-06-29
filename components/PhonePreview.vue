<script setup lang="ts">
import { cn } from '@/lib/utils';
import { CaseColor } from '@prisma/client';
import { AspectRatio } from './ui/aspect-ratio';

const props = defineProps<{
  croppedImageUrl: string;
  color: CaseColor;
}>();

const aspectRatioRef = ref<HTMLElement | null>(null);

const renderedDimensions = ref({ width: 0, height: 0 });

const handleResize = () => {
  if (!aspectRatioRef.value) return;
  const { width, height } = aspectRatioRef.value.getBoundingClientRect();
  renderedDimensions.value = { width, height };
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const caseBackgroundColor = computed(() => {
  switch (props.color) {
    case 'blue':
      return 'bg-blue-950';
    case 'rose':
      return 'bg-rose-950';
    default:
      return 'bg-zinc-950';
  }
});

const renderedWidth = computed(() => {
  return renderedDimensions.value.width / (3000 / 637);
});

const imageStyle = computed(() => {
  return {
    left: `${
      renderedDimensions.value.width / 2 -
      renderedDimensions.value.width / (1216 / 121)
    }px`,
    top: `${renderedDimensions.value.height / 6.22}px`,
  };
});
</script>

<template>
  <AspectRatio ref="aspectRatioRef" :ratio="3000 / 2001" class="relative">
    <div class="absolute z-20" :style="imageStyle">
      <img
        :width="renderedWidth"
        :class="
          cn(
            'phone-skew relative z-20 rounded-b-[10px] rounded-t-[15px] md:rounded-b-[20px] md:rounded-t-[30px]',
            caseBackgroundColor
          )
        "
        :src="croppedImageUrl"
      />
    </div>

    <div class="relative z-40 h-full w-full">
      <img
        alt="phone"
        src="/clearphone.png"
        class="pointer-events-none h-full w-full rounded-md antialiased"
      />
    </div>
  </AspectRatio>
</template>
