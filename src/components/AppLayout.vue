<script>
import { useRouter } from 'vue-router';
import BackButton from "./BackButton.vue";
import NavMenu from "./NavMenu.vue";

export default {

  components: {
    BackButton, 
    NavMenu,
  },

  props: {
    imgUrl: {
      type: String,
    },
    imgName: {
      type: String,
    },
    backFunc: {
      type: Function,
    },
    getCoctail: {
      type: Function,
    },
    backButtonVisible: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
      imagePath: "",
      mainShow: false,
      router: useRouter(),
    };
  },

  mounted() {
    this.setBaseBg();
  },

  watch: {
    imgUrl: "setLinkBg",
    imgName: "setBaseBg",
  },

  methods: {
    setBaseBg() {
      this.imagePath = require(`@/assets/images/${this.imgName}`);

      return {
        backgroundImage: `url(${this.imagePath})`,
      };
    },
    setLinkBg() {
      return {
        backgroundImage: `url(${this.imgUrl})`,
      };
    },

    goBack(){
      this.backFunc ? this.backFunc() : this.router.go(-1)
    }
  },
};
</script>

<template>
  <div class="root">
    <div :style="setBaseBg()" class="base-bg">
      <div :style="setLinkBg()" class="link-bg"></div>
    </div>
    <div class="main" :class="{ active: mainShow }">
      <div class="buttons-wrapper">
          <BackButton @click="goBack" class="back-button" v-if="backButtonVisible"/>

          <NavMenu class="nav" :getCoctail="getCoctail" />
        </div>
      <div class="slot-wrapper">
        <slot></slot>
      </div>

      <div @click="mainShow = !mainShow" class="slide-main">
        <div class="arrow" :class="{ active: !mainShow }"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.root {
  display: flex;
  background: $background;
  height: 100dvh;
}
.base-bg {
  position: relative;
  width: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  .link-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
}

.main {
  position: relative;
  width: 50%;
  padding: 32px 40px;
}
.slot-wrapper {
  position: relative;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
}

.buttons-wrapper {
  position: absolute;
  top: 32px;
  left: 40px;
  right: 40px;
  .back-button {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    border-color: $text;
    transition: 0.3s linear;
    z-index: 15;

    &:hover {
      transform: scale(0.95);
      border-color: $accent;
    }
  }
}

.slide-main {
  display: none;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 4%;
  background: $background;

  .arrow {
    width: 40px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: $accent;
    clip-path: polygon(100% 40%, 50% 100%, 0 40%, 0 31%, 50% 91%, 100% 31%);

    animation: pulse 2s linear infinite;

    &.active {
      transform: rotateX(180deg) translate(-50%, 40%);
    }

    @keyframes pulse {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .img,
  .main {
    padding: 30px 15px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  .base-bg {
    width: 100%;
  }
  .main {
    width: 100%;
    z-index: 2;
    background: rgba($background, 0.8);
    animation: hideMain 0.6s linear forwards;
    &.active {
      animation: showMain 0.6s linear forwards;

      @keyframes showMain {
        to {
          transform: translateY(-96%);
        }
        from {
          transform: translateY(0);
        }
      }
    }

    @keyframes hideMain {
      to {
        transform: translateY(0);
      }
      from {
        transform: translateY(-96%);
      }
    }
  }

  .buttons-wrapper {
    top: 30px;
    left: 15px;
    right: 15px;
  }

  .slide-main {
    display: block;
  }
}
</style>
