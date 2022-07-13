<template>
  <div class="meals_menu">
    <div class="-mx-5">
      <div class="grid gap-4 grid-cols-12">
        <div class="col-span-12 sm:col-span-6">
          <MealCard />
        </div>
        <div class="col-span-12 sm:col-span-6">
          <MealCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "./CategoryCard.vue";
export default { components: { CategoryCard } };
</script>

<style>
</style>
