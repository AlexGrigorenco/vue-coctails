<script>
import { useRoute, useRouter } from "vue-router";
import { ROUTER_PATH } from "@/constants/router";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";

export default {
  props: {
    getCoctail: {
      type: Function,
    },
  },

  data() {
    return {
      menuIsActive: false,
      route: useRoute(),
      router: useRouter(),
    };
  },
  setup() {
    const rootStore = useRootStore();
    rootStore.getFavorites()

    const { favorites } = storeToRefs(rootStore);

    return{
        favorites
    }
  },
  computed: {
    routeName() {
      return this.route.name;
    },
  },
  methods: {
    goToCoctailRandom() {
      this.router.push(ROUTER_PATH.COCTAIL_RANDOM);
      if (this.routeName === ROUTER_PATH.COCTAIL_RANDOM) {
        this.getCoctail();
      }
      this.menuIsActive = false;
    },
    goToFavorites(){
      this.router.push(`/favorites`)
    },
    goToCategories() {
      this.router.push(ROUTER_PATH.CATEGORIES);
      this.menuIsActive = false;
    },
    goToIngredients() {
      this.router.push('/ingredients')
      this.menuIsActive = false;
    },
    goHome() {
      useRootStore().setIngredient(null)
      this.router.push(ROUTER_PATH.HOME);
      this.menuIsActive = false;
    },
  },
};
</script>

<template>
  <div class="nav">
    <div v-if="menuIsActive" @click="menuIsActive = !menuIsActive" class="fill"></div>
    <div class="nav-list" :class="{ active: menuIsActive }">
      <el-button class="bttn" @click="goToCoctailRandom"
        >Get random cocktail</el-button
      >
      <el-button 
      :class="{empty: !Object.keys(favorites).length}"
      class="bttn"
      @click="goToFavorites">Favorites</el-button>
      <el-button 
      class="bttn"
      @click="goToIngredients">Ingredients</el-button>
      <el-button 
      class="bttn"
      @click="goToCategories">Categories</el-button>
      <el-button 
      class="bttn"
      @click="goHome">Home</el-button>
    </div>
    <div
      class="nav-icon"
      @click="menuIsActive = !menuIsActive"
      :class="{ active: menuIsActive }"
    >
      <span></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.fill{
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $background;
  opacity: .7;
  z-index: 14;
  animation: fill-show .4s linear forwards;

  @keyframes fill-show {
    0%{
      opacity: 0;
    }
    100%{
      opacity: .7;
    }
  }
}
.nav {
  position: absolute;
  top: 0;
  right: 0;
  width: max-content;
  display: flex;
  gap: 12px;

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    overflow: hidden;
    max-height: 40px;
    z-index: 15;

    &.active {
      animation: showNav 0.4s linear forwards;

      @keyframes showNav {
        0% {
          max-height: 40px;
        }
        100% {
          max-height: 200px;
        }
      }
    }
  }
  .bttn {
    width: 100%;
    padding: 8px 16px;
    background: $accent;
    border: none;
    color: $text;
    font-family: "Raleway", "Arial", sans-serif;
    transition: 0.3s linear;
    margin: 0;
    z-index: 15;

    &.empty{
      opacity: .5;
    }

    &:hover {
      background: darken($accent, 10%);
    }
    &:active {
      transform: scale(0.8);
      transition: 0;
    }
  }

  .nav-icon {
    cursor: pointer;
    position: relative;
    width: 30px;
    height: 30px;
    overflow: hidden;
    z-index: 15;

    span {
      width: 100%;
      height: 2px;
      position: absolute;
      top: 50%;
      background: $accent;
      transform: translateY(-50%);

      &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background: $accent;
      transform: translateY(-12px);
      transition: .2s linear;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background: $accent;
      transform: translateY(12px);
      transition: .2s linear;
    }
    }

    &.active {
      span {
        background: transparent;

        &::after {
        transform: rotate(45deg);
      }
      &::before {
        transform: rotate(-45deg);
      }
      }
    }
  }
}
</style>
