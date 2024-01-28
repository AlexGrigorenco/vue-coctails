<script>
import CoctailThumb from "@/components/CoctailThumb.vue";

    export default {
        components: {
          CoctailThumb,
        },
        props: {
            list: {
                type: Array,
                required: true,
            }
        }
    }
</script>

<template>
  <div class="coctails-list">
          <CoctailThumb v-for="coctail in list" :key="coctail.idDrink" :coctail="coctail" />
        </div>
</template>


<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.coctails-list {
  width: 100%;
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
}
@media (max-width: 900px) {
  .coctails-list {
  grid-template-columns: repeat(2, 1fr);
}
}
@media (max-width: 450px) {
  .coctails-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>