<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight, Check, Star } from 'lucide-vue-next';

definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div class="grainy-light bg-slate-50">
    <section>
      <MaxWidthWrapper
        class="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32"
      >
        <div class="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div
            class="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div class="absolute -top-20 left-0 hidden w-28 lg:block">
              <div
                class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/50"
              />
              <img src="/snake-1.png" class="w-full" />
            </div>
            <h1
              class="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl"
            >
              Your Image on a
              <span class="bg-green-600 px-2 text-white">Custom</span>
              Phone Case
            </h1>
            <p
              class="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left"
            >
              Capture your favorite memories with your own,
              <span class="font-semibold">one-of-one</span> phone case.
              CaseCobra allows you to protect your memories, not just your phone
              case.
            </p>

            <ul
              class="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start"
            >
              <div class="space-y-2">
                <li class="flex items-center gap-1.5 text-left">
                  <Check class="h-5 w-5 shrink-0 text-green-600" />
                  High-quality, durable material
                </li>
                <li class="flex items-center gap-1.5 text-left">
                  <Check class="h-5 w-5 shrink-0 text-green-600" />5 year print
                  guarantee
                </li>
                <li class="flex items-center gap-1.5 text-left">
                  <Check class="h-5 w-5 shrink-0 text-green-600" />
                  Modern iPhone models supported
                </li>
              </div>
            </ul>

            <div
              class="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start"
            >
              <div class="flex -space-x-4">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-1.png"
                  alt="user image"
                />
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-2.png"
                  alt="user image"
                />
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-3.png"
                  alt="user image"
                />
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-4.jpg"
                  alt="user image"
                />
                <img
                  class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                  src="/users/user-5.jpg"
                  alt="user image"
                />
              </div>

              <div
                class="flex flex-col items-center justify-between sm:items-start"
              >
                <div class="flex gap-0.5">
                  <Star class="h-4 w-4 fill-green-600 text-green-600" />
                  <Star class="h-4 w-4 fill-green-600 text-green-600" />
                  <Star class="h-4 w-4 fill-green-600 text-green-600" />
                  <Star class="h-4 w-4 fill-green-600 text-green-600" />
                  <Star class="h-4 w-4 fill-green-600 text-green-600" />
                </div>

                <p><span class="font-semibold">1.250</span> happy customers</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20"
        >
          <div class="relative md:max-w-xl">
            <img
              src="/your-image.png"
              class="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
            />
            <img
              src="/line.png"
              class="absolute -bottom-6 -left-6 w-20 select-none"
            />
            <Phone class="w-64" imgSrc="/testimonials/1.jpg" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>

    <section class="grainy-dark bg-slate-100 py-24">
      <MaxWidthWrapper class="flex flex-col items-center gap-16 sm:gap-32">
        <div class="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
          <h2
            class="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl"
          >
            What our
            <span class="relative px-2">
              customers
              <Icons
                class="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-green-500 sm:block"
              />
            </span>
            say
          </h2>
          <img src="/snake-2.png" class="order-0 w-24 lg:order-2" />
        </div>

        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div class="mb-2 flex gap-0.5">
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
            </div>
            <div class="text-lg leading-8">
              <p>
                "The case feels durable and I even got a compliment on the
                design. Had the case for two and a half months now and
                <span class="bg-slate-800 p-0.5 text-white">
                  the image is super clear
                </span>
                , on the case I had before, the image started fading into
                yellow-ish color after a couple weeks. Love it."
              </p>
            </div>
            <div class="mt-2 flex gap-4">
              <img
                class="h-12 w-12 rounded-full object-cover"
                src="/users/user-1.png"
                alt="user"
              />
              <div class="flex flex-col">
                <p class="font-semibold">Jonathan</p>
                <div class="flex items-center gap-1.5 text-zinc-600">
                  <Check class="h-4 w-4 stroke-[3px] text-green-600" />
                  <p class="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div class="mb-2 flex gap-0.5">
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
              <Star class="h-5 w-5 fill-green-600 text-green-600" />
            </div>
            <div class="text-lg leading-8">
              <p>
                "I usually keep my phone together with my keys in my pocket and
                that led to some pretty heavy scratchmarks on all of my last
                phone cases. This one, besides a barely noticeable scratch on
                the corner,
                <span class="bg-slate-800 p-0.5 text-white">
                  looks brand new after about half a year
                </span>
                . I dig it."
              </p>
            </div>
            <div class="mt-2 flex gap-4">
              <img
                class="h-12 w-12 rounded-full object-cover"
                src="/users/user-4.jpg"
                alt="user"
              />
              <div class="flex flex-col">
                <p class="font-semibold">Josh</p>
                <div class="flex items-center gap-1.5 text-zinc-600">
                  <Check class="h-4 w-4 stroke-[3px] text-green-600" />
                  <p class="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div class="pt-16">
        <Reviews />
      </div>
    </section>

    <section>
      <MaxWidthWrapper class="py-24">
        <div class="mb-12 px-6 lg:px-8">
          <div class="mx-auto max-w-2xl sm:text-center">
            <h2
              class="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl"
            >
              Upload your photo and get
              <span class="relative bg-green-600 px-2 text-white">
                your own case
              </span>
              now
            </h2>
          </div>
        </div>

        <div class="mx-auto max-w-6xl px-6 lg:px-8">
          <div
            class="relative flex grid-cols-2 flex-col items-center gap-40 md:grid"
          >
            <img
              src="/arrow.png"
              class="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
            />

            <div
              class="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl"
            >
              <img
                src="/horse.jpg"
                class="h-full w-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>

            <Phone class="w-60" imgSrc="/horse_phone.jpg" />
          </div>
        </div>

        <ul class="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
          <li class="w-fit">
            <Check class="mr-1.5 inline h-5 w-5 text-green-600" />
            High-quality silicone material
          </li>
          <li class="w-fit">
            <Check class="mr-1.5 inline h-5 w-5 text-green-600" />
            Scratch- and fingerprint resistant coating
          </li>
          <li class="w-fit">
            <Check class="mr-1.5 inline h-5 w-5 text-green-600" />
            Wireless charging compatible
          </li>
          <li class="w-fit">
            <Check class="mr-1.5 inline h-5 w-5 text-green-600" />5 year print
            warranty
          </li>

          <div class="flex justify-center">
            <NuxtLink
              :class="
                buttonVariants({
                  size: 'lg',
                  class: 'mx-auto mt-8',
                })
              "
              href="/configure/upload"
            >
              Create your case now <ArrowRight class="ml-1.5 h-4 w-4" />
            </NuxtLink>
          </div>
        </ul>
      </MaxWidthWrapper>
    </section>
  </div>
</template>
