<script>
export default {
        name: 'my-loader',
    }
</script>
<template>
    <div class="loader-wrapper"><span class="loader"> </span></div>
</template>


<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.loader-wrapper{
    padding: 20px 0;
    width: 100%;
    display: flex;
    justify-content: center;
}
.loader {
  width: 32px;
  height: 72px;
  display: inline-block;
  position: relative;
  border: 2px solid #FFF;
  -webkit-animation: animloader 1s linear infinite alternate;
          animation: animloader 1s linear infinite alternate;
  color: $accent;
  border-radius: 0 0 4px 4px;
  transform: perspective(140px) rotateX(-45deg);
}

@-webkit-keyframes animloader {
  0% {
    box-shadow: 0 0 inset;
  }
  100% {
    box-shadow: 0 -70px inset;
  }
}
@keyframes animloader {
  0% {
    box-shadow: 0 0 inset;
  }
  100% {
    box-shadow: 0 -70px inset;
  }
}

</style>