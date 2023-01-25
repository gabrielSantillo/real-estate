<template>
  <div class="home">
    <home-component></home-component>
    <subscribe-component></subscribe-component>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import SubscribeComponent from '@/components/SubscribeComponent.vue'

export default {
  components: { HomeComponent, SubscribeComponent },

}
</script>

<style lang="scss">


</style>
