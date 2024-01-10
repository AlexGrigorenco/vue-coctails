<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { COCTAIL_RANDOM_URL } from "@/constants";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const coctail = ref(null)

const ingredients = computed(() => {
  const ingredients = [];

  for(let i = 1; i < 16; i++){
    if(!coctail.value[`strIngredient${i}`]) break;

    const ingredient = {};
    ingredient.name = coctail.value[`strIngredient${i}`];
    ingredient.measure = coctail.value[`strMeasure${i}`];

    ingredients.push(ingredient);
  }

  return ingredients
})

async function getCoctail() {
    const data = await axios.get(COCTAIL_RANDOM_URL)
    coctail.value = data?.data?.drinks[0];
}

function goBack() {
  router.go(-1)
}

getCoctail();
</script>
<template>
  <AppLayout imgName="coctail-bg.jpg" :imgUrl="coctail ? coctail.strDrinkThumb : ''" :backFunc="goBack">
    <div v-if="coctail" class="wrapper container">
        <div class="title">{{ coctail.strDrink }}</div>
        <div class="line"></div>
        <div class="ingredient-list">
          <div v-for="(ingredient, i) in ingredients" :key="i" class="ingredient">
            <img src="@/assets/images/heart-icon.svg" alt="icon">
            <div>{{ ingredient.name }}</div>
            <div v-if="ingredient.measure" class="measure">
              {{ ingredient.measure }}
            </div>
          </div>
        </div>
        <div class="coctail-formula">
            {{ coctail.strInstructions }}
        </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 650px;
  margin: 0 auto;
}

.ingredient-list {
  padding: 50px 0;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .ingredient {
    display: flex;
    align-items: center;
    overflow-x: auto;
    color: $text-muted;

    img{
      margin-right: clamp(10px, 0.316rem + 1.41vw, 22px);
    }
    .measure{
      position: relative;
      padding-left: 20px;

      &::after{
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        top: 0;
        left: 10px;
        background: $accent;
      }
    }
  }
}

.coctail-formula {
  padding: 30px 0;
  text-align: center;
  font-size: 20px;
  color: $text-muted;
}
</style>
