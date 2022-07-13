<template>
  <div>
    <div class="containr px-5 mx-auto pt-12">
      <h1 class="uppercase font-bold text-2xl text-primary mb-4">
        Nom de restorant
      </h1>
      <div class="-mx-5 mt-14">
        <div class="mb-3">
          <AcountItemCard title="Les categories" count="10" />
        </div>
        <div class="mb-3">
          <AcountItemCard title="Le repas" count="102" />
        </div>
        <div class="mb-3">
          <AcountItemCard
            title="Mon compte"
            count="0"
            :img="{ src: '', alt: 'hello world' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MealsMenu from "@/components/MealsMenu.vue";
import AcountItemCard from "./components/AcountItemCard.vue";
export default {
  layout: "FrontLayout",
  name: "CategoryPage",
  components: { MealsMenu, AcountItemCard },
};
</script>
