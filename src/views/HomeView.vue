<template>
  <div class="home">
    <header-component></header-component>
    <home-component></home-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  components: { HeaderComponent, HomeComponent },

}
</script>

<style lang="scss">


</style>
