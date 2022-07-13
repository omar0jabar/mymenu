<template>
  <div class="logo">
    <NuxtLink to="/">
      <h1 v-if="h1">
        <img src="~/assets/imgs/logo.svg" alt="" />
      </h1>
      <div v-else>
        <img src="~/assets/imgs/logo.svg" alt="" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    h1: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>
