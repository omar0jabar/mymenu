<template>
  <div>
    <div class="containr px-5 mx-auto">
      <CategoryCard />
    </div>
  </div>
</template>

<script>
import { HomeQuery } from "~/graphql/queries/Home";
import CategoryCard from "@/components/CategoryCard.vue";
export default {
  layout: "FrontLayout",
  name: "IndexPage",
  apollo: {
    tests: {
      query: HomeQuery,
    },
  },
  components: { CategoryCard },
};
</script>
