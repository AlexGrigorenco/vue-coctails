<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { COCTAIL_BY_ID_URL } from "@/constants";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

const coctail = ref(null)
const coctailId = computed(() => route.path.split("/").pop());

async function getCoctail() {
    const data = await axios.get(`${COCTAIL_BY_ID_URL}${coctailId.value}`)
    coctail.value = data?.data?.drinks[0];
}

getCoctail();
</script>
<template>
  <AppLayout imgName="coctail-bg.jpg" :imgUrl="coctail ? coctail.strDrinkThumb : ''">
    <div v-if="coctail" class="wrapper container">
        <div class="title">{{ coctail.strDrink }}</div>
        <div class="line"></div>

        <div class="coctail-formula">
            {{ coctail.strInstructions }}
        </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
</style>
