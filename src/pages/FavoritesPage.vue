<script setup>
import AppLayout from "@/components/AppLayout.vue";

</script>

<template>
  <AppLayout
    :imgName="`coctail-bg.jpg`"
  >
    <div class="wrapper container">
      <div>
        <div class="title">favorites</div>
        <div class="line"></div>
        <div class="text">
            favorites
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

.categories-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  .category{
    cursor: pointer;
    padding: 8px 4px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid $text-muted;
    border-radius: 8px;
    transition: .3s linear;

    &:hover {
        color: $text;
        border-color: $accent;
        transform: scale(1.1);
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
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
