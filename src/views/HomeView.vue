<template>
  <div class="home">
    <home-component></home-component>
    <residencies-component></residencies-component>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import ResidenciesComponent from '@/components/ResidenciesComponent.vue'

export default {
  components: { HomeComponent, ResidenciesComponent },

}
</script>

<style lang="scss">


</style>
