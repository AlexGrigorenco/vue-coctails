<script >
export default {
    props: {
        coctail: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        amountShow: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<template>
  <RouterLink :id="coctail.strDrink" :to="`/coctails/${coctail.idDrink}`" class="thumb">
    <div class="img">
        <div v-if="amountShow" class="amount">{{ index }}</div>
        <img :src="coctail.strDrinkThumb" loading="lazy" alt="image">
    </div>
    <div class="name">
        {{ coctail.strDrink }}
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.thumb{
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    &:hover .name{
        color: $accent;
    }

    &:hover img{
        transform: scale(1.1);
    }
}
.img{
    position: relative;
    width: 80%;
    aspect-ratio: 1/1;
    background-size: cover;
    overflow: hidden;
    
    &::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: $accent;
        opacity: .1;
    }
    &::before{
        content: '';
        position: absolute;
        width: 30%;
        height: 120%;
        background: $accent;
        opacity: .4;
        transform: rotate(10deg);
        filter: blur(30px);
        animation: load-image 1s linear infinite;

        @keyframes load-image {
            0%{
                transform: translateX(-200%) rotate(10deg);
            }
            100%{
                transform: translateX(400%) rotate(10deg);
            }
        }
    }

    .amount{
        font-size: 16px;
        color: $text;
        text-shadow: 0 0 8px #000;
        position: absolute;
        top: 2px;
        right: 6px;
        z-index: 6;
    }

    img{
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 5;
        transition: .4s linear;
    }
}
.name{
    text-align: center;
    transition: .3s linear;
    transition: .4s linear;
}
</style>