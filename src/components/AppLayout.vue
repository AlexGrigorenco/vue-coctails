<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: false,
    },
    imgName: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      imagePath: "",
      mainShow: false,
    };
  },

  mounted() {
    this.setBackground();
  },

  watch: {
    imgUrl: "setBackground",
    imgName: "setBackground",
  },

  methods: {
    setBackground() {
      if (this.imgUrl) {
        this.imagePath = this.imgUrl;
      } else if (this.imgName) {
        this.imagePath = require(`@/assets/images/${this.imgName}`);
      }
      return {
        backgroundImage: `url(${this.imagePath})`,
      };
    },
  },
};
</script>

<template>
  <div class="root">
    <div :style="setBackground()" class="img"></div>
    <div class="main" :class="{ active: mainShow }">
      <div class="slot-wrapper">
        <el-button class="bttn">Get random cocktail</el-button>
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
  height: 100vh;
}
.img {
  flex: 1;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.main {
  position: relative;
  flex: 1;
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

.bttn {
  position: fixed;
  top: 32px;
  right: 40px;
  padding: 8px 16px;
  background: $accent;
  border: none;
  color: $text;
  font-family: "Raleway", "Arial", sans-serif;
  transition: 0.3s linear;

  &:hover {
    background: darken($accent, 10%);
  }
  &:active {
    transform: scale(0.8);
    transition: 0;
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
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  .main {
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

  .slide-main {
    display: block;
  }
}
</style>
