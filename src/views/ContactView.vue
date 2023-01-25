<template>
    <div>
        <contact-component></contact-component>
        <subscribe-component></subscribe-component>
    </div>
</template>

<script>
import ContactComponent from '@/components/ContactComponent.vue'
import SubscribeComponent from '@/components/SubscribeComponent.vue'
    export default {
  components: { ContactComponent, SubscribeComponent },
        
    }
</script>

<style lang="scss" scoped>

</style>