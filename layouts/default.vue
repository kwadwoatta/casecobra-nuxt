<script setup lang="ts">
import "@/assets/css/tailwind.css";
import { Toaster } from "@/components/ui/toast";
</script>

<template>
  <html lang="en">
    <body style="font-family: 'Recursive'">
      <Navbar />
      <main class="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
        <div class="flex-1 flex flex-col h-full">
          <slot />
        </div>
        <Footer />
      </main>

      <Toaster />
    </body>
  </html>
</template>

