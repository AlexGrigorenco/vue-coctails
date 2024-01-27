<script setup>
import AppLayout from "@/components/AppLayout.vue";
import axios from "axios";
import { computed, ref, onMounted, watch } from "vue";
import { ALCOHOL_SORT_LIST_URL, COCTAILS_SORT_BY_ALCOHOL_URL } from "@/constants";
import { useRoute, useRouter } from "vue-router";
import CoctailsList from "@/components/CoctailsList.vue";

const alcoholSortList = ref(null);
const coctailsList = ref([])

const route = useRoute();
const router = useRouter();

const routePathName = computed(() => route.path.split("/").pop());

function tabIsActive(name) {
  return routePathName.value.split('/').pop().replace('_', ' ') === name
}

async function getAlcoholSortList() {
  const data = await axios.get(ALCOHOL_SORT_LIST_URL);
  alcoholSortList.value = data?.data?.drinks;
}

async function getCoctails() {
  coctailsList.value = []
  const data = await axios.get(`${COCTAILS_SORT_BY_ALCOHOL_URL}${routePathName.value}`);
  coctailsList.value = data?.data?.drinks;
}
function fetchData() {
  getCoctails()
}

onMounted(() => {
  fetchData();
});

watch(routePathName, () => {
  fetchData();
});

function goSort(name) {
  router.push(`/alcoholic/${name}`)
}


getAlcoholSortList();
fetchData()
</script>

<template>
  <AppLayout :imgName="`home-main-img-coctail-choice.jpg`">
    <div class="wrapper container">
      <div>
        <div class="title"></div>
        <div class="tabs-wrapper" v-if="alcoholSortList">
          <div 
          class="tab" 
          v-for="sortItem in alcoholSortList" 
          :key="sortItem"
          :class="{'active': tabIsActive(sortItem.strAlcoholic)}"
          @click="goSort(sortItem.strAlcoholic.replace(' ', '_'))">
            {{ sortItem.strAlcoholic }}
          </div>
        </div>
        <CoctailsList v-if="coctailsList" :list="coctailsList"/>
        <my-loader v-if="!coctailsList.length" />
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
.tabs-wrapper {
  position: relative;
  width: 100%;
  display: flex;

  &::after{
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 1px;
    box-shadow: 0 4px 4px $accent;
  }

  .tab {
    background: $background;
    cursor: pointer;
    flex: 1;
    padding: 16px 4px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: .2s linear;

  &:hover{
    color: $accent;
    transform: scale(1.05);
  }
    &.active{
      pointer-events: none;
      position: relative;
      color: $accent;
      box-shadow: 0 0 4px $accent;
      z-index: 10;

      &::after{
        position: absolute;
        content: '';
        width: 100%;
        height: 10px;
        left: 0;
        bottom: -5px;
        background: $background;
        z-index: 10;
      }
    }
  }
}
</style>
