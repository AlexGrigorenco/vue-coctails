<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { computed, ref, onMounted, watch } from "vue";
import CoctailsList from "@/components/CoctailsList.vue";
import { COCTAILS_BY_CATEGORY_URL } from '@/constants'
import axios from "axios";

const rootStore = useRootStore();
rootStore.getCategories();


const route = useRoute();

const { categories } = storeToRefs(rootStore);

const coctailsByCategory = ref([])

const categoryPathName = computed(() => route.path.split("/").pop().replace('_', ' / ').replace('%20', ' '));

function categoryActive(name) {
  return categoryPathName.value === name
}
async function getCoctailsByCategory(category) {
  const data = await axios.get(`${COCTAILS_BY_CATEGORY_URL}${category}`);
  coctailsByCategory.value = data?.data?.drinks
}

function fetchData() {
  getCoctailsByCategory(categoryPathName.value);
}

onMounted(() => {
  fetchData();
});

watch(() => route.path, (newPath) => {
  categoryPathName.value = newPath.split('/').pop().replace('_', ' / ').replace('%20', ' ');
  fetchData();
});

</script>

<template>
  <AppLayout :imgName="`home-bg.jpg`">
    <div class="wrapper container">
      <div v-if="categories">
        <div class="title">{{ categoryPathName }}</div>
        <div class="line"></div>
        <div class="text">
          From classic cocktails to modern trends, our categories offer a rich
          selection of drinks for every taste. Explore different styles and
          discover new flavors crafted by magnificent mixologists.
        </div>
        <div class="categories-list">
          <div class="category" v-for="category in categories" :key="category"
            :class="{ active: categoryActive(category.strCategory) }">
            <RouterLink 
            :to="`/categories/${category.strCategory.replace(' / ', '_').replace(' ', '%20')}`"
            @click="getCoctailsByCategory()">
              {{ category.strCategory }}
            </RouterLink>
          </div>
        </div>
        <CoctailsList v-if="coctailsByCategory" :list="coctailsByCategory" />
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

.text {
  padding: 60px 0;
  color: $text-muted;
  text-align: center;
  max-width: 516px;
  line-height: 36px;
  letter-spacing: 1.6px;
  font-weight: 400;
}

.categories-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  .category {
    cursor: pointer;
    padding: 8px 4px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid $text-muted;
    border-radius: 8px;
    transition: 0.3s linear;

    &:hover {
      color: $text;
      border-color: $accent;
      transform: scale(1.1);
    }

    &.active {
      color: $text;
      border-color: $accent;
      transform: scale(1.1);
      pointer-events: none;
      box-shadow: 0 0 8px $accent;
    }
  }
}

@media (max-width: 900px) {
  .categories-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 450px) {
  .categories-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
