
<script setup lang="ts">
import createKindeClient, {
  type KindeClient,
} from "@kinde-oss/kinde-auth-pkce-js";
import {
  useForwardPropsEmits,
  type DialogRootEmits,
  type DialogRootProps,
} from "radix-vue";
import { buttonVariants } from "./ui/button";

const kinde = useState<KindeClient>("kinde");

await callOnce(async () => {
  kinde.value = await createKindeClient({
    client_id: process.env.NUXT_KINDE_CLIENT_ID,
    domain: process.env.NUXT_KINDE_AUTH_DOMAIN ?? "",
    redirect_uri: window.location.origin,
  });
});

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <Dialog v-bind="forwarded">
    <DialogContent class="absolute z-[9999999]">
      <DialogHeader>
        <div class="relative mx-auto w-24 h-24 mb-2">
          <Image
            src="/snake-1.png"
            alt="snake image"
            class="object-contain"
            fill
          />
        </div>
        <DialogTitle
          class="text-3xl text-center font-bold tracking-tight text-gray-900"
        >
          Log in to continue
        </DialogTitle>
        <DialogDescription class="text-base text-center py-2">
          <span class="font-medium text-zinc-900">
            Your configuration was saved! </span
          >{' '} Please login or create an account to complete your purchase.
        </DialogDescription>
      </DialogHeader>

      <div class="grid grid-cols-2 gap-6 divide-x divide-gray-200">
        <button
          :class="buttonVariants({ variant: 'outline' })"
          @click="kinde.login()"
        >
          Login
        </button>
        <button
          :class="buttonVariants({ variant: 'default' })"
          @click="kinde.register()"
        >
          Sign up
        </button>
      </div>
    </DialogContent>
  </Dialog>
</template>


