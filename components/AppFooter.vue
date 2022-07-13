<template>
  <footer class="app-footer flex items-center justify-center">
    <ul class="menu-footer flex gap-x-16 items-end text-xl">
      <li>
        <NuxtLink to="#">
          <Icon icon="fa-solid:user" />
        </NuxtLink>
      </li>
      <li class="active">
        <NuxtLink to="#">
          <Icon icon="ant-design:home-filled" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          <Icon icon="bxs:search" />
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
.app-footer {
  background-color: $white;
  height: 60px;
  position: fixed;
  bottom: 0;
  right: calc((100vw - $width-front) / 2);
  max-width: $width-front;
  width: 100%;
  position: fixed;
  z-index: 1000;
  box-shadow: 0px -3px 6px -4px rgba($black, 0.58);
  color: var(--primary-color);
  @media #{$max-sm} {
    right: 0;
  }
}

.menu-footer {
  li {
    transition-duration: 0.15s;
    &:hover {
      transform: scale(1.2);
    }
    &.active {
      transform: translateY(-8px) scale(1.3);
      position: relative;
      &::after {
        content: "";
        content: "";
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--primary-color);
        border-radius: 50%;
        width: 5px;
        height: 5px;
      }
    }
  }
}
</style>
