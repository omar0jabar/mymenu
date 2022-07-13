<template>
  <div class="pb-20">
    <MealImgs />
    <div class="meal_fp_info mt-4 p-5">
      <h1 class="text-2xl text-primary font-bold">
        Pizza margarita avec fromage double
      </h1>
      <div class="mt-1 flex items-center mb-7">
        <Rate
          v-model="rateValue"
          disabled
          show-score
          text-color="#ff9900"
          score-template=""
        >
        </Rate>
        <span class="text-base text-gray-400 font-roboto ml-2 mt-1">
          (180gm)
        </span>
      </div>
      <div>
        On sait depuis longtemps que travailler avec du texte lisible et
        contenant du
      </div>
      <div class="mt-7">
        <span class="text-4xl font-bold text-primary">48DH</span>
      </div>
    </div>

    <div class="you_might_like containr px-5 mx-auto mt-5">
      <h2 class="font-medium text-2xl font-roboto mb-3">Vous pourriez aimer</h2>
      <MealsMenu />
    </div>
  </div>
</template>

<script>
import MealImgs from "@/pages/meal/components/MealImgs.vue";
import { Rate } from "element-ui";
export default {
  layout: "FrontLayout",
  name: "CategoryPage",
  data() {
    return {
      rateValue: 4,
    };
  },
  components: { MealImgs, Rate },
};
</script>

<style lang="scss">
.meal_fp_info {
  background-color: $white;

  .el-rate__icon {
    font-size: 24px;
    margin-right: 0;
  }
}
</style>
