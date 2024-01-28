<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import CategoriesList from "@/components/CategoriesList.vue";

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
        <CategoriesList v-if="categories" :categories="categories"/>
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
</style>
