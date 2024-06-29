<script setup lang="ts">
import '@/assets/css/tailwind.css';
import { Toaster } from '@/components/ui/toast';
</script>

<template>
  <html lang="en">
    <body style="font-family: 'Recursive'">
      <Navbar />
      <main class="grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
        <div class="flex h-full flex-1 flex-col">
          <slot />
        </div>
        <Footer />
      </main>

      <Toaster />
    </body>
  </html>
</template>
