<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import CoctailsList from "@/components/CoctailsList.vue";

const rootStore = useRootStore();
rootStore.getFavorites();

const { favorites } = storeToRefs(rootStore);

const cocktails = computed(() => {
  const cocktailsArray = [];

  Object.keys(favorites.value).forEach((key) => {
    const cocktail = favorites.value[key];
    cocktailsArray.push({
      idDrink: key,
      strDrink: cocktail.strDrink,
      strDrinkThumb: cocktail.strDrinkThumb,
    });
  });

  return cocktailsArray;
});

function clearFavorites(){
  localStorage.setItem("favorites", JSON.stringify({}));
  rootStore.getFavorites();
}
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
          drinks all in one place <br>
          <div v-if="!cocktails.length">
          Your list of favorite cocktails is empty. To add a cocktail to your favorites, click the heart icon on the cocktail page
        </div>
        </div>
        
        <CoctailsList v-if="cocktails.length" :list="cocktails" />
        <div v-if="cocktails.length" class="clear-button-wrapper">
          <el-button class="bttn" @click="clearFavorites"
            >Clear favorites</el-button>
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

.clear-button-wrapper{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.bttn {
    padding: 8px 16px;
    background: $accent;
    border: none;
    color: $text;
    font-family: "Raleway", "Arial", sans-serif;
    transition: 0.3s linear;
    margin: 0;

    &:hover {
      background: darken($accent, 10%);
    }
    &:active {
      transform: scale(0.8);
      transition: 0;
    }
  }
</style>
