<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { computed, ref, onMounted, watch } from "vue";
import coctailsList from "@/components/CoctailsList.vue";
import IngredientsList from "@/components/IngredientsList.vue";
import axios from "axios";
import { COCTAILS_BY_INGREGIENT_URL } from "@/constants";

const rootStore = useRootStore();
rootStore.getIngredients();

const route = useRoute();
const router = useRouter();

const { ingredients } = storeToRefs(rootStore);

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
        <div @click="clean" class="clean">clean</div>
        <div class="line"></div>
        <div v-if="coctailsListSorted.length" class="coctails-wrapper">
          <coctailsList :list="coctailsListSorted" class="list" />
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
  cursor: pointer;
  padding: 14px 0;
  font-size: 20px;
  color: $accent;
  transition: 0.2s linear;

  &:hover {
    transform: translateY(-2px);
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