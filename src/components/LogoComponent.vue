<template>
    <div class="logos section">
        <div class="logos__container container grid">
            <div class="logos__img" v-scroll-reveal.reset="{ delay: 550, origin: 'left' }">
                <img src="@/img/logo1.png" alt="">
            </div>

            <div class="logos__img" v-scroll-reveal.reset="{ delay: 250, origin: 'left' }">
                <img src="@/img/logo2.png" alt="">
            </div>

            <div class="logos__img" v-scroll-reveal.reset="{ delay: 250, origin: 'right' }">
                <img src="@/img/logo3.png" alt="">
            </div>

            <div class="logos__img" v-scroll-reveal.reset="{ delay: 550, origin: 'right' }">
                <img src="@/img/logo4.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.logos {
    background-color: #fff;
}

.logos__container {
    padding-top: 2rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
    justify-items: center;
}

.logos__img img {
    height: 60px;
    opacity: .2;
    transition: .3s;
}

.logos__img img:hover {
    opacity: .6;
}

@media screen and (min-width: 767px) {
    .logos__container {
        grid-template-columns: repeat(4, max-content);
        justify-content: center;
    }
}

@media screen and (min-width: 1024px) {
    .logos__img img {
        height: 100px;
    }
}

@media screen and (min-width: 1040px) {
    .logos__container {
      margin: auto;
    }
}
</style>