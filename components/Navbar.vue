
<script setup lang="ts">
import type { KindeClient } from "@kinde-oss/kinde-auth-pkce-js";
import { ArrowRight } from "lucide-vue-next";
import { buttonVariants } from "./ui/button";

const kinde: KindeClient = useKindeClient();

const { data: user } = await useAsyncData(async () => {
  if (await kinde.isAuthenticated()) return kinde.getUser();
  return false;
});

const isAdmin = user.value
  ? user.value.email === process.env.ADMIN_EMAIL
  : false;
</script>

<template>
  <nav
    class="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all"
  >
    <MaxWidthWrapper>
      <div
        class="flex h-14 items-center justify-between border-b border-zinc-200"
      >
        <NuxtLink href="/" class="flex z-40 font-semibold">
          case<span class="text-green-600">cobra</span>
        </NuxtLink>

        <div class="h-full flex items-center space-x-4">
          <template v-if="$auth.loggedIn">
            <NuxtLink
              to="/api/logout"
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
              href="/dashboard"
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
              href="/configure/upload"
              :class="
                buttonVariants({
                  size: 'sm',
                  class: 'hidden sm:flex items-center gap-1',
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

            <div class="h-8 w-px bg-zinc-200 hidden sm:block" />

            <NuxtLink
              href="/configure/upload"
              :class="
                buttonVariants({
                  size: 'sm',
                  class: 'hidden sm:flex items-center gap-1',
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

