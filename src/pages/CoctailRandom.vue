<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { COCTAIL_RANDOM_URL } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { computed, ref } from "vue";
import axios from "axios";

const coctail = ref(null);

const swiperBreackpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
  },
  950: {
    slidesPerView: 3,
  },
};

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i < 16; i++) {
    if (!coctail.value[`strIngredient${i}`]) break;

    const ingredient = {};
    ingredient.name = coctail.value[`strIngredient${i}`];
    ingredient.measure = coctail.value[`strMeasure${i}`];

    ingredients.push(ingredient);
  }

  return ingredients;
});

function setIngredientBg(name) {
  return {
    backgroundImage: `url(https://www.thecocktaildb.com/images/ingredients/${name.replace(
      / /g,
      "%20"
    )}-Small.png)`,
  };
}

async function getCoctail() {
  const data = await axios.get(COCTAIL_RANDOM_URL);
  coctail.value = data?.data?.drinks[0];
}

getCoctail();
</script>
<template>
  <AppLayout
    imgName="coctail-bg.jpg"
    :imgUrl="coctail ? coctail.strDrinkThumb : ''"
    :getCoctail="getCoctail"
  >
    <div v-if="coctail" class="wrapper container">
      <div class="title">{{ coctail.strDrink }}</div>
      <div class="line"></div>
      <div class="ingredient-list">
        <swiper :breakpoints="swiperBreackpoints">
          <swiper-slide
            class="slide"
            v-for="(ingredient, i) in ingredients"
            :key="i"
          >
            <div :style="setIngredientBg(ingredient.name)" class="image"></div>
            <div class="name">
              {{ ingredient.name }}
            </div>
            <div v-if="ingredient.measure" class="measure">
              {{ ingredient.measure }}
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="coctail-formula">
        {{ coctail.strInstructions }}
      </div>
      <div class="category">
          category: 
          <RouterLink 
          class="link"
          :to="`/categories/${coctail.strCategory.replace(' / ', '_').replace(' ', '%20')}`"
          > {{ coctail.strCategory }}</RouterLink>
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
  align-items: center;
  max-width: 650px;
  margin: 0 auto;
}
.ingredient-list {
  width: 100%;
  padding: 50px 0;
  font-size: 18px;
  max-width: 500px;

  .slide {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .image {
      width: 100%;
      aspect-ratio: 1/1;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .name {
      text-align: center;
    }

    .measure {
        width: max-content;
        position: inherit;
        padding-top: 4px;

        &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            left: 0;
            top: 0;
            background-color: $accent;
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
.category {
  padding: 10px 0;
  color: $text-muted;
  text-align: right;

  .link {
    display: inline-block;
    padding-left: 8px;
    color: $accent;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
