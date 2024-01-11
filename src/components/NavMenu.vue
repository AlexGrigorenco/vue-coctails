<script>
import { useRoute, useRouter } from "vue-router";
import { ROUTER_PATH } from "@/constants/router";

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
    },
    goToCategories() {
      this.router.push(ROUTER_PATH.CATEGORIES);
    },
  },
};
</script>

<template>
  <div class="nav">
    <div class="nav-list" :class="{ active: menuIsActive }">
      <el-button class="bttn" @click="goToCoctailRandom"
        >Get random cocktail</el-button
      >
      <el-button 
      class="bttn"
      @click="goToCategories">Categories</el-button>
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

    span {
      width: 100%;
      height: 2px;
      position: absolute;
      top: 50%;
      background: $accent;
      transform: translateY(-50%);
      transition: .3s linear;

      &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background: $accent;
      transform: translateY(-12px);
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background: $accent;
      transform: translateY(12px);
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
