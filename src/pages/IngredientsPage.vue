<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import IngredientsList from "@/components/IngredientsList.vue";

const rootStore = useRootStore();
rootStore.getIngredients();

const router = useRouter();

const { ingredients } = storeToRefs(rootStore);

async function setIngredient(name) {
  router.push(`/ingredients/${name}`)
}
</script>


<template>
  <AppLayout :imgName="`home-main-img-coctail-choice.jpg`">
    <div class="wrapper container">
      <div v-if="ingredients">
        <div class="title">Ingredients</div>
        <div class="line"></div>

        <div class="text">
          Welcome to the Ingredients page! Here you'll find a diverse selection
          of components to create your perfect cocktails. From fresh fruits and
          berries to various syrups and alcoholic beverages - we have everything
          to satisfy your taste buds. Choose from the list, create your unique
          combinations, and embark on your culinary adventure!
        </div>
        <IngredientsList v-if="ingredients" :ingredientsList="ingredients" @clickToIngredientName="setIngredient" />
      </div>
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
.title {
  span span {
    color: $accent;
  }

  span:last-child span {
    display: none;
  }
}
.text {
  padding: 30px 0 10px 0;
  color: $text-muted;
  text-align: center;
  max-width: 516px;
  line-height: 36px;
  letter-spacing: 1.6px;
  font-weight: 400;
}
</style>