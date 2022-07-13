<template>
  <div class="meal_fp">
    <div class="meal_fp-wrapper">
      <div class="meal_fp-imgp">
        <img src="~/assets/imgs/pizza.png" alt="" />
      </div>
      <ul class="meal_fp-listimgs">
        <li class="meal_fp-sm">
          <img src="~/assets/imgs/pizza.png" alt="" />
        </li>
        <li class="meal_fp-sm">
          <img src="~/assets/imgs/pizza.png" alt="" />
        </li>
        <li class="meal_fp-sm">
          <img src="~/assets/imgs/pizza.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.meal_fp {
  background-color: $white;
  padding-top: 68px;
  padding-bottom: 46px;
  padding-right: 20px;
  padding-left: 20px;
  &-wrapper {
    max-width: 332px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    row-gap: 26px;
    align-items: center;
  }
  &-imgp {
    flex: 1;
  }
  &-listimgs {
    flex: 0 0 60px;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    row-gap: 10px;
  }
  &-sm {
    padding: 6px;
  }
}
</style>
