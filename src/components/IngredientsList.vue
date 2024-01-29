<script>
export default {
  props: {
    ingredientsList: {
      type: Array,
      required: true,
    },
    ingredientsActiveList: {
      type: Array,
    },
  },
  methods: {
    clickHandle(name) {
      this.$emit("clickToIngredientName", name);
    },
    ingredientIsActive(name) {
      if (this.ingredientsActiveList) {
        return this.ingredientsActiveList.includes(name);
      }
    },
  },
};
</script>
<template>
  <div class="ingredients-wrapper">
    <div
      v-for="ingredient in ingredientsList"
      :key="ingredient"
      class="ingredients-item"
      @click="() => clickHandle(ingredient.strIngredient1)"
      :class="{ active: ingredientIsActive(ingredient.strIngredient1) }"
    >
      {{ ingredient.strIngredient1 }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.ingredients-wrapper {
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  .ingredients-item {
    display: flex;
    padding: 8px 4px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid $accent;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s linear;

    &:hover {
      transform: scale(1.03);
    }

    &.active {
      box-shadow: inset 0 0 18px $accent;
    }
  }
}
</style>