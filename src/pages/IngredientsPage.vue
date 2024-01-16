<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import CoctailsList from "@/components/CoctailsList.vue";
import axios from "axios";
import { COCTAILS_BY_INGREGIENT_URL } from '@/constants'

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients } = storeToRefs(rootStore);

const ingredientList = ref([])

const coctailsListObj = ref({})

const coctailsListSorted = computed(() => {
    const arrays = Object.values(coctailsListObj.value)
    if (arrays.length === 1) {
        return arrays[0]
    }
    if (arrays.length === 0) {
        return []
    }
    const commonObjects = arrays.reduce((common, array) =>
        common.filter(obj1 => array.some(obj2 => obj2.idDrink === obj1.idDrink))
    );
    return commonObjects
})

async function setIngredient(name) {
    const index = ingredientList.value.indexOf(name);

    if (index === -1) {
        ingredientList.value.push(name)
        await getCoctailsByIngredient(name)
    } else {
        ingredientList.value.splice(index, 1)
        delete coctailsListObj.value[name]
    }
}

async function getCoctailsByIngredient(ingredient) {
    const data = await axios.get(`${COCTAILS_BY_INGREGIENT_URL}${ingredient}`);
    coctailsListObj.value[`${ingredient}`] = (data?.data?.drinks);
}

function ingredientIsActive(name) {
    return ingredientList.value.includes(name);
}

function clean() {
    ingredientList.value = [];
    coctailsListObj.value = {};
}
</script>


<template>
    <AppLayout :imgName="`home-main-img-coctail-choice.jpg`">
        <div class="wrapper container">
            <div v-if="ingredients">
                <div v-if="!ingredientList.length" class="title">Ingredients</div>
                <div v-if="ingredientList.length" class="title">
                    <span v-for="ingredientName in ingredientList" :key="ingredientName">
                        {{ ingredientName }} <span>/ </span>
                    </span>
                </div>
                <div v-if="ingredientList.length" @click="clean" class="clean">clean</div>
                <div class="line"></div>

                <div v-if="!ingredientList.length" class="text">
                    Welcome to the Ingredients page! Here you'll find a diverse selection of components to create your
                    perfect cocktails. From fresh fruits and berries to various syrups and alcoholic beverages - we have
                    everything to satisfy your taste buds. Choose from the list, create your unique combinations, and embark
                    on your culinary adventure!
                </div>
                <div v-if="coctailsListSorted.length" class="coctails-wrapper">
                    <CoctailsList :list="coctailsListSorted" class="list" />
                </div>
                <div v-if="!coctailsListSorted.length && ingredientList.length" class="text">
                    No cocktails with these ingredients
                </div>
                <div class="ingredients-wrapper">
                    <div v-for="ingredient in ingredients" :key="ingredient" class="ingredients-item"
                        @click="setIngredient(ingredient.strIngredient1)"
                        :class="{ 'active': ingredientIsActive(ingredient.strIngredient1) }">
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

    &>div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
}

.coctails-wrapper {
    max-height: 500px;
    overflow-y: auto;
    margin-top: 20px;
    width: 100%;
    padding-bottom: 20px;
}

.title {
    span span {
        color: $accent;
    }

    span:last-child span {
        display: none;
    }
}
.clean {
        cursor: pointer;
        padding: 14px 0;
        font-size: 20px;
        color: $accent;
        transition: .2s linear;

        &:hover {
            transform: translateY(-2px);
        }
    }
.text {
    padding: 30px 0 10px 0;
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
        transition: .3s linear;

        &:hover {
            transform: scale(1.03);
        }

        &.active {
            color: $text-muted;
            border-color: transparent;
            box-shadow: 0 0 4px $accent;
            opacity: .8;
        }
    }
}
</style>