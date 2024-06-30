<script setup lang="ts">
import { Progress } from '@/components/ui/progress';
import { db } from '~/db';
import { formatPrice } from '~/lib/utils';

definePageMeta({
  middleware: ['auth-logged-in'],
});

const { data } = await useAsyncData(async () => {
  const orders = await db.order.findMany({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    orderBy: { createdAt: 'desc' },
    include: { user: true, shippingAddress: true },
  });

  const lastWeekSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    _sum: { amount: true },
  });

  const lastMonthSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)),
      },
    },
    _sum: { amount: true },
  });

  return {
    orders,
    lastWeekSum,
    lastMonthSum,
  };
});

const WEEKLY_GOAL = 500;
const MONTHLY_GOAL = 2500;
</script>

<template>
  <div class="flex min-h-screen w-full bg-muted/40">
    <div class="mx-auto flex w-full max-w-7xl flex-col sm:gap-4 sm:py-4">
      <div class="flex flex-col gap-16">
        <div class="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader class="pb-2">
              <CardDescription>Last Week</CardDescription>
              <CardTitle class="text-4xl">
                {{ formatPrice(data?.lastWeekSum?._sum.amount! ?? 0) }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-sm text-muted-foreground">
                of {{ formatPrice(WEEKLY_GOAL) }} goal
              </div>
            </CardContent>
            <CardFooter>
              <Progress
                :value="
                  ((data?.lastWeekSum?._sum.amount ?? 0) * 100) / WEEKLY_GOAL
                "
              />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader class="pb-2">
              <CardDescription>Last Month</CardDescription>
              <CardTitle class="text-4xl">
                {{ formatPrice(data?.lastMonthSum?._sum.amount ?? 0) }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-sm text-muted-foreground">
                of {{ formatPrice(MONTHLY_GOAL) }} goal
              </div>
            </CardContent>
            <CardFooter>
              <Progress
                :value="
                  ((data?.lastMonthSum?._sum.amount ?? 0) * 100) / MONTHLY_GOAL
                "
              />
            </CardFooter>
          </Card>
        </div>

        <h1 class="text-4xl font-bold tracking-tight">Incoming orders</h1>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead class="hidden sm:table-cell">Status</TableHead>
              <TableHead class="hidden sm:table-cell">
                Purchase date
              </TableHead>
              <TableHead class="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow
              v-for="order in data?.orders"
              :key="order.id"
              class="bg-accent"
            >
              <TableCell>
                <div class="font-medium">{order.shippingAddress?.name}</div>
                <div class="hidden text-sm text-muted-foreground md:inline">
                  {{ order.user.email }}
                </div>
              </TableCell>
              <TableCell class="hidden sm:table-cell">
                <StatusDropdown :id="order.id" :orderStatus="order.status" />
              </TableCell>
              <TableCell class="hidden md:table-cell">
                {{ order.createdAt.toLocaleDateString() }}
              </TableCell>
              <TableCell class="text-right">
                {{ formatPrice(order.amount) }}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
</template>
;
