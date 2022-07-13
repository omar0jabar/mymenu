<template>
  <div class="meals_card bg-white flex items-start py-5 px-6 relative">
    <img src="~/assets/imgs/pizza.png" alt="" class="w-20 mr-3" />
    <div class="flex-1">
      <h2 class="text-lg leading-5 font-bold">
        Pizza margarita avec fromage double
      </h2>
      <div class="mt-1 flex items-center">
        <Rate
          v-model="rateValue"
          disabled
          show-score
          text-color="#ff9900"
          score-template=""
        >
        </Rate>
        <span class="text-sm text-gray-400 font-roboto ml-1"> 180gm </span>
      </div>
      <div class="mt-1">
        <span class="text-2xl text-primary font-bold"> 48DH </span>
      </div>
    </div>
    <span class="meals_card-chevron text-primary">
      <Icon icon="akar-icons:chevron-right" class="font-bold text-base" />
    </span>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import { Rate } from "element-ui";
export default {
  data() {
    return {
      rateValue: 3.7,
    };
  },
  components: {
    Icon,
    Rate,
  },
};
</script>

<style lang="scss">
.meals_card {
  .el-rate__icon {
    font-size: 12px;
    margin-right: 0;
  }
  &-chevron {
    position: absolute;
    right: 17px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
