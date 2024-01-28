<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { computed, ref, onMounted, watch } from "vue";
import CoctailsList from "@/components/CoctailsList.vue";
import CategoriesList from "@/components/CategoriesList.vue";
import { COCTAILS_BY_CATEGORY_URL } from '@/constants'
import axios from "axios";

const rootStore = useRootStore();
rootStore.getCategories();


const route = useRoute();

const { categories } = storeToRefs(rootStore);

const coctailsByCategory = ref([])

const categoryPathName = computed(() => route.path.split("/").pop().replace('_', ' / ').replace('%20', ' '));

async function getCoctailsByCategory(category) {
  coctailsByCategory.value = [];
  const data = await axios.get(`${COCTAILS_BY_CATEGORY_URL}${category}`);
  coctailsByCategory.value = data?.data?.drinks
}

function fetchData() {
  getCoctailsByCategory(categoryPathName.value);
}

onMounted(() => {
  fetchData();
});

watch(() => route.path, () => {
  fetchData();
});

</script>

<template>
  <AppLayout :imgName="`coctail-bg.jpg`">
    <div class="wrapper container">
      <div v-if="categories">
        <div class="title">{{ categoryPathName }}</div>
        <div class="line"></div>
        <CategoriesList v-if="categories" :categories="categories"/>
        <CoctailsList v-if="coctailsByCategory" :list="coctailsByCategory" />
        <my-loader v-if="!coctailsByCategory.length" />
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;

  &>div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
