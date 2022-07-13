<template>
  <div class="app-header">
    <div class="front-logo">
      <img src="~/assets/imgs/default-logo.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app-header {
  max-width: $width-front;
  width: 100%;
  position: fixed;
  right: calc((100vw - $width-front) / 2);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: 86px;
  overflow: hidden;
  @media #{$max-sm} {
    right: 0;
  }
}
.front-logo {
  width: auto;
  position: relative;
  padding-top: 14px;
  padding-right: 14px;
  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: -30px;
    background-color: $white;
    width: 175px;
    height: 175px;
    border-radius: 100%;
  }

  img {
    max-width: 42px;
    max-height: 42px;
    position: relative;
    z-index: 1;
  }
}
</style>
