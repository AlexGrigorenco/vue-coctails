<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
rootStore.getFavorites();

const { favorites } = storeToRefs(rootStore);
</script>

<template>
  <AppLayout :imgName="`coctail-bg.jpg`">
    <div class="wrapper container">
      <div>
        <div class="title">favorites</div>
        <div class="line"></div>
        <div class="text">
          Welcome to the Favorites section! Here, you'll find the cocktails that
          have captured your taste. Enjoy the exquisite blends of your favorite
          drinks all in one place
        </div>

        <div>
          {{ favorites }}
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
</style>
