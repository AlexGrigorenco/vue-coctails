<script setup>
    import AppLayout from "@/components/AppLayout.vue";
    import {useRootStore} from '@/stores/root';
    import { storeToRefs } from "pinia";

    const rootStore = useRootStore();
    rootStore.getIngredients()

    const {ingredients} = storeToRefs(rootStore)
</script>


<template>
    <AppLayout imgName="home-bg.jpg" >
        <div class="wrapper container">
            <div class="title">
                Choose your drink
            </div>
            <div class="line"></div>
        </div>
    </AppLayout>
</template>


<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;
}
</style>