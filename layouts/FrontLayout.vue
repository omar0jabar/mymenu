<template>
  <div
    class="default-layout min-h-screen mx-auto relative"
    :style="styleSettings"
  >
    <AppHeader />
    <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
export default {
  data() {
    return {
      styleSettings: {
        "--primary-color": "#F53B50",
        "--primary-font": "'Solway', serif",
      },
    };
  },
  components: { AppHeader, AppFooter },
};
</script>

<style lang="scss">
.default-layout {
  max-width: $width-front;
  background-color: $bg-main;
  box-shadow: 0 0 5px 1px rgba($black, 0.361);
  font-family: var(--primary-font);
}
</style>
