<script setup>
import { ref } from "vue";
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients } = storeToRefs(rootStore);
const ingredient = ref(null);
</script>


<template>
  <AppLayout imgName="home-bg.jpg">
    <div class="wrapper container">
      <div class="title">Choose your drink</div>
      <div class="line"></div>
      <div class="select-wrapper">
        <el-select
          v-model="ingredient"
          class="select"
          placeholder="Choose main ingredient"
          size="large"
        >
          <el-option
            v-for="item in ingredients"
            :key="item.strIngredient1"
            :label="item.strIngredient1"
            :value="item.strIngredient1"
          />
        </el-select>
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
}
.select-wrapper {
    padding: 60px 0;
}
</style>