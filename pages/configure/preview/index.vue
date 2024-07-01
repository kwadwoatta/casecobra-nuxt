<script setup lang="ts">
definePageMeta({
  middleware: [
    function () {
      const route = useRoute();
      const { id } = route.query;

      if (!id || typeof id !== 'string') {
        abortNavigation();
      }
    },
  ],
});

// const configuration = await db.configuration.findUnique({
//   where: { id: id?.toString() },
// });

// if (!configuration) {
//   navigateTo('404');
// }
</script>

<template>
  <!-- {{ id }} -->
  <DesignPreview configuration="{configuration}" />
</template>
