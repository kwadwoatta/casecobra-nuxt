<script setup lang="ts">
import { useDropZone } from '@vueuse/core';
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-vue-next';
import { ref } from 'vue';
import { cn } from '~/lib/utils';

const isPending = useState('isPending', () => false);
const uploadProgress = useState('uploadProgress', () => 0);

const { startUpload, isUploading } = useUploadThing('imageUploader', {
  onClientUploadComplete: ([data]) => {
    const configId = data.serverData?.configId;
    navigateTo(`/configure/design?id=${configId}`);
  },
  onUploadProgress(p) {
    uploadProgress.value = p;
  },
});

const imageFilesData = ref<
  { name: string; size: number; type: string; lastModified: number }[]
>([]);

function onImageDrop(files: File[] | null) {
  imageFilesData.value = [];
  if (files) {
    imageFilesData.value = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }));
    startUpload(files, { configId: undefined });
  }
}

const imageDropZoneRef = ref<HTMLElement>();

const { isOverDropZone } = useDropZone(imageDropZoneRef, {
  dataTypes: ['image/png', 'image/jpg', 'image/jpeg'],
  onDrop: onImageDrop,
});
</script>

<template>
  <div
    :class="
      cn(
        'relative my-16 flex h-full w-full flex-1 flex-col items-center justify-center rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl',
        {
          'bg-blue-900/10 ring-blue-900/25': isOverDropZone,
        }
      )
    "
  >
    <div
      class="relative flex w-full flex-1 flex-col items-center justify-center"
    >
      <div ref="imageDropZoneRef">
        <div
          class="flex h-full w-full flex-1 flex-col items-center justify-center"
        >
          <!-- <input type="file" /> -->

          <MousePointerSquareDashed
            v-if="isOverDropZone"
            class="mb-2 h-6 w-6 text-zinc-500"
          />

          <Loader2
            v-else-if="isUploading || isPending"
            class="mb-2 h-6 w-6 animate-spin text-zinc-500"
          />

          <Image v-else class="mb-2 h-6 w-6 text-zinc-500" />

          <div class="mb-2 flex flex-col justify-center text-sm text-zinc-700">
            <template v-if="isUploading">
              <div class="flex flex-col items-center">
                <p>Uploading...</p>
                <Progress
                  :value="uploadProgress"
                  class="mt-2 h-2 w-40 bg-gray-300"
                />
              </div>
            </template>

            <template v-else-if="isPending">
              <div class="flex flex-col items-center">
                <p>Redirecting, please wait...</p>
              </div>
            </template>

            <template v-else-if="isOverDropZone">
              <p><span class="font-semibold">Drop file</span> to upload</p>
            </template>

            <template v-else>
              <p>
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
            </template>
          </div>

          <p v-if="!isPending" class="text-xs text-zinc-500">PNG, JPG, JPEG</p>
        </div>
      </div>
    </div>
  </div>
</template>
