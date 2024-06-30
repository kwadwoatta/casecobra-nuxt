<script setup lang="ts">
import type { KindeClient } from '@kinde-oss/kinde-auth-pkce-js';
import { ArrowRight } from 'lucide-vue-next';
import { buttonVariants } from './ui/button';

const config = useRuntimeConfig();

const { data: isAdmin } = await useAsyncData(async () => {
  const kinde: KindeClient = useKindeClient();
  if (await kinde.isAuthenticated()) {
    const user = await kinde.getUserProfile();
    return user && user.email === config.public.ADMIN_EMAIL;
  }

  return false;
});
</script>

<template>
  <nav
    class="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all"
  >
    <MaxWidthWrapper>
      <div
        class="flex h-14 items-center justify-between border-b border-zinc-200"
      >
        <NuxtLink to="/" class="z-40 flex font-semibold">
          case<span class="text-green-600">cobra</span>
        </NuxtLink>

        <div class="flex h-full items-center space-x-4">
          <template v-if="$auth.loggedIn">
            <NuxtLink
              to="/api/logout"
              external
              :class="
                buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })
              "
            >
              Sign out
            </NuxtLink>

            <NuxtLink
              v-if="isAdmin"
              to="/dashboard"
              :class="
                buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })
              "
            >
              Dashboard ✨
            </NuxtLink>

            <NuxtLink
              to="/configure/upload"
              :class="
                buttonVariants({
                  size: 'sm',
                  class: 'hidden items-center gap-1 sm:flex',
                })
              "
            >
              Create case
              <ArrowRight class="ml-1.5 h-5 w-5" />
            </NuxtLink>
          </template>

          <template v-else>
            <RegisterLink
              to="/api/register"
              :class="
                buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })
              "
            >
              Sign up
            </RegisterLink>

            <LoginLink
              to="/api/login"
              :class="
                buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })
              "
            >
              Login
            </LoginLink>

            <div class="hidden h-8 w-px bg-zinc-200 sm:block" />

            <NuxtLink
              to="/configure/upload"
              :class="
                buttonVariants({
                  size: 'sm',
                  class: 'hidden items-center gap-1 sm:flex',
                })
              "
            >
              Create case
              <ArrowRight class="ml-1.5 h-5 w-5" />
            </NuxtLink>
          </template>
        </div>
      </div>
    </MaxWidthWrapper>
  </nav>
</template>
