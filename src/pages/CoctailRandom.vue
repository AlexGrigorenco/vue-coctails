<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { COCTAIL_RANDOM_URL } from "@/constants";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, } from "swiper/vue";
import "swiper/scss";
import { computed, ref } from "vue";
import axios from "axios";
import FavoritesButton from "@/components/FavoritesButton.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import IconArrowSvg from "@/components/IconArrowSvg.vue";

const rootStore = useRootStore();

const { favorites } = storeToRefs(rootStore);

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

const cocktailId = computed(() => {
  return coctail.value.idDrink
})

const coctailData = computed(() => {
  return {
    idDrink: coctail.value.idDrink,
    strDrink: coctail.value.strDrink,
    strDrinkThumb: coctail.value.strDrinkThumb
  }
})

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
      <div class="title">{{ coctail.strDrink }} <FavoritesButton :coctailData="coctailData" :isFavorites="Object.keys(favorites).includes(cocktailId)"/></div>
      <div class="line"></div>
      <div class="ingredient-list">
        <swiper 
        :modules="[Navigation]"
        :breakpoints="swiperBreackpoints"
        :navigation="{
          enabled: true,
          prevEl: '.prev',
          nextEl: '.next',
        }">
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
        <div class="prev slider-button"><IconArrowSvg/></div>
        <div class="next slider-button"><IconArrowSvg/></div>
      </div>
      <div class="coctail-formula">
        {{ coctail.strInstructions }}
        <div class="alcoholic">
              This is 
              <RouterLink class="link"
              :to="`/alcoholic/${coctail.strAlcoholic.replace(' ', '_')}`"
              >{{ coctail.strAlcoholic }}</RouterLink>
              coctail
            </div>
      </div>
      <div class="category">
          category: 
          <RouterLink 
          class="link"
          :to="`/categories/${coctail.strCategory.replace(' / ', '_').replace(' ', '%20')}`"
          > {{ coctail.strCategory }}</RouterLink>
        </div>
    </div>
    <div v-if="!coctail" class="wrapper container"><my-loader /></div>
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

.slider-button{
  cursor: pointer;
  height: 60px;
  width: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  svg{
    fill: $accent;
    width: 100%;
    height: 100%;
  }

  &.prev{
    left: 0;
  }

  &.next{
    right: 0;

    svg{
      transform: rotate(180deg);
    }
  }
  &.swiper-button-disabled{
    opacity: .3;

    svg{
      fill: $text-muted;
    }
  }
  &.swiper-button-lock{
    display: none;
    pointer-events: none;
  }
}
.ingredient-list {
  position: relative;
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
  .alcoholic {
    text-align: right;
    padding-top: 10px;

    .link{
      color: $accent;
      display: inline-block;
      transition: .3s linear;

      &:hover{
        transform: scale(1.05);
      }
    }
  }
}
.category {
  padding: 10px 0;
  color: $text-muted;
  text-align: right;

  .link {
    display: inline-block;
    padding-left: 8px;
    color: $accent;
    transition: .3s linear;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
