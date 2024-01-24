<script>
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import FavoritesIcon from "@/components/FavoritesIcon.vue";
export default {
  components: { FavoritesIcon },
  props: {
    coctailData: {
      type: Object,
      required: true,
    },
    isFavorites: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const rootStore = useRootStore();
    rootStore.getFavorites()

    const { favorites } = storeToRefs(rootStore);

    function addToFavorites(){
        rootStore.addToFavorites(props.coctailData)
    }

    return{
        favorites,
        addToFavorites
    }
  },
};
</script>

<template>
  <FavoritesIcon  @click="addToFavorites" :class="{active: isFavorites}"/>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
</style>
