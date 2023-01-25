<template>
    <div>
        <values-component></values-component>
        <subscribe-component></subscribe-component>
    </div>
</template>

<script>
import ValuesComponent from '@/components/ValuesComponent.vue'
import SubscribeComponent from '@/components/SubscribeComponent.vue'
    export default {
  components: { ValuesComponent, SubscribeComponent },
        
    }
</script>

<style lang="scss" scoped>

</style>