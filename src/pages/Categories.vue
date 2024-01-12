<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
rootStore.getCategories();

const { categories } = storeToRefs(rootStore);

</script>

<template>
  <AppLayout
    :imgName="`coctail-bg.jpg`"
  >
    <div class="wrapper container">
      <div v-if="categories">
        <div class="title">Choose category</div>
        <div class="line"></div>
        <div class="text">
            From classic cocktails to modern trends, our categories offer a rich selection of drinks for every taste. Explore different styles and discover new flavors crafted by magnificent mixologists.
        </div>
        <div v-if="categories" class="categories-list">
          <div class="category" v-for="(category, i) in categories" :key="i">
            <RouterLink :to="`/categories/${category.strCategory.replace(' / ', '_').replace(' ', '%20')}`">
                {{ category.strCategory }}
            </RouterLink>
          </div>
        </div>
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

  .category{
    cursor: pointer;
    padding: 8px 4px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid $text-muted;
    border-radius: 8px;
    transition: .3s linear;

    &:hover {
        color: $text;
        border-color: $accent;
        transform: scale(1.1);
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
