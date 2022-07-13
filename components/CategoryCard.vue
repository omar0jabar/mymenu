<template>
  <div class="bg-white flex items-center py-5 px-6">
    <img src="~/assets/imgs/pizza.png" alt="" class="w-20 mr-3" />
    <div class="flex-1">
      <h2 class="text-2xl font-bold">Pizza</h2>
      <small class="text-sm -mt-1 block text-gray-600">26 plats</small>
    </div>
    <span class="text-primary">
      <Icon icon="akar-icons:chevron-right" class="font-bold  text-base" />
    </span>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
};
</script>

<style>
</style>
