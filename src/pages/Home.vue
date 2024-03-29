<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import CoctailsList from "@/components/CoctailsList.vue";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, ingredient, coctails } = storeToRefs(rootStore);

function getCoctails() {
  rootStore.getCoctails(rootStore.ingredient);
}

function resetHomeData() {
  rootStore.setIngredient(null);
  rootStore.clearCoctails();
}
</script>


<template>
  <AppLayout :imgName="ingredient ? `home-main-img-coctail-choice.jpg` : `home-bg.jpg`" :backFunc="resetHomeData" :backButtonVisible="!!ingredient">
    <div class="wrapper container">
      <div v-if="!ingredient || !coctails">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="rootStore.ingredient"
            class="select"
            filterable
            allow-create
            placeholder="Choose main ingredient"
            size="large"
            @change="getCoctails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <div class="img-wrapper"></div>
      </div>
      <div v-else>
        <div class="title">COCKTAILS WITH {{ rootStore.ingredient }}</div>
        <div class="line"></div>
        <CoctailsList :list="coctails" />
      </div>
      <my-loader v-if="ingredient && !coctails.length" />
    </div>
  </AppLayout>
</template>


<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
.select-wrapper {
  padding: 60px 0;
}
.text {
  padding: 60px 0;
  color: $text-muted;
  text-align: center;
  max-width: 516px;
  line-height: 36px;
  letter-spacing: 1.6px;
  font-weight: 400;
}
.img-wrapper {
  width: 100%;
  max-width: 345px;
  aspect-ratio: 345/120;
  background-image: url("/src/assets/images/home-main-img.png");
}
</style>