<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { ref } from "vue";
// import CoctailsList from "@/components/CoctailsList.vue";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients } = storeToRefs(rootStore);

const ingredientList = ref([])

function setIngredient(name) {
  const index = ingredientList.value.indexOf(name);

  index === -1 ? ingredientList.value.push(name) : ingredientList.value.splice(index, 1);
}


function ingredientIsActive(name){
    return ingredientList.value.includes(name)
}
// function getCoctails() {
//   rootStore.getCoctails(rootStore.ingredient);
// }

// function removeIngredient() {
//   rootStore.setIngredient(null)
// }
</script>


<template>
  <AppLayout :imgName="`home-main-img-coctail-choice.jpg`">
    <div class="wrapper container">
      <div v-if="ingredients">
        <div v-if="!ingredientList.length" class="title">Ingredients</div>
        <div v-if="ingredientList.length" class="title">
            <span 
            v-for="ingredientName in ingredientList"
            :key="ingredientName">
                {{ ingredientName }} <span>/ </span>
            </span>
        </div>
        <div class="line"></div>
        <div v-if="!ingredientList.length" class="text">
            Welcome to the Ingredients page! Here you'll find a diverse selection of components to create your perfect cocktails. From fresh fruits and berries to various syrups and alcoholic beverages - we have everything to satisfy your taste buds. Choose from the list, create your unique combinations, and embark on your culinary adventure!
        </div>
        <div class="ingredients-wrapper">
            <div 
            v-for="ingredient in ingredients"
            :key="ingredient"
            class="ingredients-item"
            @click="setIngredient(ingredient.strIngredient1)"
            :class="{'active': ingredientIsActive(ingredient.strIngredient1)}">
                {{ ingredient.strIngredient1 }}
            </div>
        </div>
        <div class="img-wrapper"></div>
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

.title span:last-child span {
    display: none;
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
.img-wrapper {
  width: 100%;
  max-width: 345px;
  aspect-ratio: 345/120;
}

.ingredients-wrapper{
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    .ingredients-item{
        display: flex;
        padding: 8px 4px;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid $accent;
        cursor: pointer;
        border-radius: 8px;
        transition: .3s linear;

        &:hover{
            transform: scale(1.03);
        }

        &.active{
            color: $text-muted;
            border-color: transparent;
            box-shadow: 0 0 4px $accent;
        }
    }
}
</style>