<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import CoctailThumb from "@/components/CoctailThumb.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, ref, onMounted, watch } from "vue";
import IngredientsList from "@/components/IngredientsList.vue";
import axios from "axios";
import { COCTAILS_BY_INGREGIENT_URL } from "@/constants";
import IconArrowSvg from "@/components/IconArrowSvg.vue";

const rootStore = useRootStore();
rootStore.getIngredients();

const route = useRoute();
const router = useRouter();

const { ingredients } = storeToRefs(rootStore);

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

const ingredientList = computed(() => {
  return route.path.split("/").pop().replace(/%20/g, " ").split("_");
});

const coctailsLists = ref([]);

const coctailsListSorted = computed(() => {
  if (coctailsLists.value.length === 0) {
    return [];
  }

  if (coctailsLists.value.length === 1) {
    return coctailsLists.value[0];
  }

  return coctailsLists.value.reduce((common, array) =>
    common.filter((obj1) => array.some((obj2) => obj2.idDrink === obj1.idDrink))
  );
});

async function setIngredient(name) {
  const index = ingredientList.value.indexOf(name);
  if (index === -1) {
    ingredientList.value.push(name);
    router.push(ingredientList.value.join("_"));
  } else {
    ingredientList.value.splice(index, 1);
    ingredientList.value.length
      ? router.push(ingredientList.value.join("_"))
      : router.push("/ingredients");
  }
  fetchData();
}

async function fetchData() {
  const coctailsListResult = [];
  for (const ingredient of ingredientList.value) {
    const data = await axios.get(`${COCTAILS_BY_INGREGIENT_URL}${ingredient}`);
    coctailsListResult.push(data?.data?.drinks);
  }
  coctailsLists.value = coctailsListResult;
}

function clean() {
  router.push("/ingredients");
}

watch(ingredientList, () => {
  fetchData();
});

onMounted(() => {
  fetchData();
});
</script>


<template>
  <AppLayout :imgName="`home-main-img-coctail-choice.jpg`">
    <div class="wrapper container">
      <div v-if="ingredients">
        <div class="title">
          <span v-for="ingredientName in ingredientList" :key="ingredientName">
            {{ ingredientName }} <span>/ </span>
          </span>
        </div>
        <div @click="clean" class="clean">clean <span>({{ coctailsListSorted.length }} items)</span></div>
        <div class="line"></div>
        <div v-if="coctailsListSorted.length" class="coctail-list">
        <swiper
          :modules="[Navigation]"
          :space-between="0"
          :breakpoints="swiperBreackpoints"
          :navigation="{
            enabled: true,
            prevEl: '.prev',
            nextEl: '.next',
          }"
        >
          <swiper-slide
            class="slide"
            v-for="(coctail, i) in coctailsListSorted"
            :key="i"
          >
          <CoctailThumb :coctail="coctail" :index="i + 1" :amountShow="true"/>
          </swiper-slide>
        </swiper>
        <div class="prev slider-button"><IconArrowSvg /></div>
        <div class="next slider-button"><IconArrowSvg /></div>
      </div>
        <div v-if="!coctailsListSorted.length" class="text">
          No cocktails with these ingredients
        </div>
        <IngredientsList
          v-if="ingredients"
          :ingredientsList="ingredients"
          :ingredientsActiveList="ingredientList"
          @clickToIngredientName="setIngredient"
        />
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

.slider-button {
  cursor: pointer;
  height: 60px;
  width: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  svg {
    fill: $accent;
    width: 100%;
    height: 100%;
  }

  &.prev {
    left: -10px;
  }

  &.next {
    right: -10px;

    svg {
      transform: rotate(180deg);
    }
  }
  &.swiper-button-disabled {
    opacity: 0.3;

    svg {
      fill: $text-muted;
    }
  }
  &.swiper-button-lock {
    display: none;
    pointer-events: none;
  }
}
.coctail-list {
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
  }
}

.coctails-wrapper {
  max-height: 500px;
  overflow-y: auto;
  margin-top: 20px;
  width: 100%;
  padding-bottom: 20px;
}

.title {
  span span {
    color: $accent;
  }

  span:last-child span {
    display: none;
  }
}
.clean {
  text-transform: uppercase;
  cursor: pointer;
  padding: 14px 0;
  font-size: 20px;
  color: $accent;
  transition: 0.2s linear;

  &:hover {
    transform: translateY(-2px);
  }

  span {
    color: $text;
    text-transform: lowercase;
    font-size: 14px;
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