<script setup lang="ts"></script>

<template>
  <footer class="relative h-20 bg-white">
    <MaxWidthWrapper>
      <div class="border-t border-gray-200" />

      <div
        class="flex h-full flex-col items-center justify-center md:flex-row md:justify-between"
      >
        <div class="pb-2 text-center md:pb-0 md:text-left">
          <p class="text-sm text-muted-foreground">
            &copy; {{ new Date().getFullYear() }} All rights reserved
          </p>
        </div>

        <div class="flex items-center justify-center">
          <div class="flex space-x-8">
            <Link
              href="#"
              class="text-sm text-muted-foreground hover:text-gray-600"
            >
              Terms
            </Link>
            <Link
              href="#"
              class="text-sm text-muted-foreground hover:text-gray-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              class="text-sm text-muted-foreground hover:text-gray-600"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  </footer>
</template>

export default Footer
