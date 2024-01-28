<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const route = useRoute();

    const categoryPathName = computed(() =>
      route.path.split("/").pop().replace("_", " / ").replace("%20", " ")
    );

    function categoryActive(name) {
      return categoryPathName.value === name;
    }

    return {
      categoryActive,
    };
  },
};
</script>
<template>
  <div class="categories-list">
    <div
      class="category"
      v-for="category in categories"
      :key="category"
      :class="{ active: categoryActive(category.strCategory) }"
    >
      <RouterLink
        :to="`/categories/${category.strCategory
          .replace(' / ', '_')
          .replace(' ', '%20')}`"
      >
        {{ category.strCategory }}
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.categories-list {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  .category {
    cursor: pointer;
    padding: 8px 4px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid $text-muted;
    border-radius: 8px;
    transition: 0.3s linear;

    &:hover {
      color: $text;
      border-color: $accent;
      transform: scale(1.1);
    }

    &.active {
      color: $text;
      border-color: $accent;
      transform: scale(1.1);
      pointer-events: none;
      box-shadow: 0 0 8px $accent;
    }
  }
}

@media (max-width: 900px) {
  .categories-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 450px) {
  .categories-list {
    padding: 1px;
    background: $accent;
    gap: 1px;
    display: flex;
    flex-wrap: wrap;
    .category {
        flex: 1;
        min-width: 150px;
        background: $background;
        border-radius: 0;
        border: none;


      &:hover {
        color: $text;
        border-color: $accent;
        transform: scale(1.1);
      }

      &.active {
        transform: scale(1);
        pointer-events: none;
        box-shadow: inset 0 0 20px $accent;
      }
    }
  }
}
</style>