<template>
  <div class="bg-white flex items-center py-5 px-6">
    <img
      v-if="img != null"
      src="~/assets/imgs/default-logo.png"
      :alt="img.alt"
      class="mr-3 w-12"
    />
    <span
      v-else
      class="
        flex
        items-center
        justify-center
        w-12
        h-12
        mr-3
        rounded-full
        border-primary border-2
        text-primary
      "
    >
      {{ count }}
    </span>
    <div class="flex-1">
      <h2 class="text-xl font-bold">{{ title }}</h2>
    </div>
    <span class="text-primary">
      <Icon icon="akar-icons:chevron-right" class="font-bold text-base" />
    </span>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  props: {
    title: {
      type: String,
      default: "title",
    },
    count: {
      type: String,
      default: "0",
    },
    img: {
      type: Object,
      default: null,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style>
</style>
