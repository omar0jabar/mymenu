<template>
  <div class="base-layout min-h-screen mx-auto relative" :style="styleSettings">
    <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleSettings: {
        "--primary-color": "#F53B50",
        "--primary-font": "'Solway', serif",
      },
    };
  },
};
</script>

<style lang="scss">
body,
html {
  font-family: $font-primary;
}

input {
  font-family: $font-secondary;
}

button {
  font-family: $font-secondary;
}

.base-layout {
  max-width: $width-front;
  background-color: $bg-main;
  box-shadow: 0 0 5px 1px rgba($black, 0.361);
  font-family: var(--primary-font);
}
</style>
