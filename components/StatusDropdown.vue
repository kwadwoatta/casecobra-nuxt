<script setup lang="ts">
import { OrderStatus } from "@prisma/client";
import { useMutation } from "@tanstack/vue-query";
import { Check, ChevronsUpDown } from "lucide-vue-next";
import { changeOrderStatus } from "~/actions/changeOrderStatus";
import { cn } from "~/lib/utils";

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
  awaiting_shipment: "Awaiting Shipment",
  fulfilled: "Fulfilled",
  shipped: "Shipped",
};

const props = defineProps<{ id: string; orderStatus: OrderStatus }>();

const { mutate } = useMutation({
  mutationKey: ["change-order-status"],
  mutationFn: changeOrderStatus,
  onSuccess: () => refreshNuxtData(),
});

function handleStatusChange(status: string) {
  if (
    typeof status === "string" &&
    Object.values(OrderStatus).includes(status as OrderStatus)
  ) {
    mutate({ id: props.id, newStatus: status as OrderStatus });
  }
}

function getLabel(status: string): string {
  const orderStatus = status as OrderStatus;
  return LABEL_MAP[orderStatus];
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" class="w-52 flex justify-between items-center">
        {LABEL_MAP[orderStatus]}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="p-0">
      <DropdownMenuItem
        v-for="status in Object.keys(OrderStatus)"
        :key="status"
        :class="
          cn(
            'flex text-sm gap-1 items-center p-2.5 cursor-default hover:bg-zinc-100',
            {
              'bg-zinc-100': orderStatus === status,
            }
          )
        "
        @click="handleStatusChange(status)"
      >
        <Check
          :class="
            cn(
              'mr-2 h-4 w-4 text-primary',
              orderStatus === status ? 'opacity-100' : 'opacity-0'
            )
          "
        />
        {{ getLabel(status) }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>