<template>
  <div>
    <div class="containr px-5 mx-auto pt-8">
      <h1 class="uppercase font-bold text-3xl text-primary mb-4">Pizza</h1>
      <MealsMenu />
    </div>
  </div>
</template>

<script>
import { HomeQuery } from "~/graphql/queries/Home";
import MealsMenu from "@/components/MealsMenu.vue";
export default {
  layout: "FrontLayout",
  name: "CategoryPage",
  //   apollo: {
  //     tests: {
  //       query: HomeQuery,
  //     },
  //   },
  components: { MealsMenu },
};
</script>
