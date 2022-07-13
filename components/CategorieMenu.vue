<template>
  <div class="meals_menu pt-8">
    <h1 class="uppercase font-bold text-3xl text-primary mb-4">Menu</h1>
    <div class="-mx-5">
      <div class="grid gap-4 grid-cols-12">
        <div class="col-span-12 sm:col-span-6">
          <CategoryCard />
        </div>
        <div class="col-span-12 sm:col-span-6">
          <CategoryCard />
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
