<script >
export default {
    props: {
        coctail: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
  <RouterLink :to="`/coctails/${coctail.idDrink}`" class="root">
    <div class="img"><img :src="coctail.strDrinkThumb" loading="lazy" alt="image"></div>
    <div class="name">
        {{ coctail.strDrink }}
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.root{
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    &:hover {
        transform: scale(1.1);
        transition: .3s linear;
    }
}
.img{
    width: 80%;
    aspect-ratio: 1/1;
    background-size: cover;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.name{
    text-align: center;
    transition: .3s linear;
    &:hover {
        color: $accent;
    }
}
</style>