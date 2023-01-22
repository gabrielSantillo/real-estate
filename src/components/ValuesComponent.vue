<template>
    <div class="value section" ref="value">
        <div class="value__container container grid">
            <div class="value__images">
                <div class="value__orbe"></div>

                <div class="value__img">
                    <img src="@/img/value.jpg" alt="">
                </div>
            </div>

            <div class="value__content">
                <div class="value__data">
                    <span class="section__subtitle">Our Value</span>
                    <h2 class="section__title">
                        Value We Give To You<span>.</span>
                    </h2>
                    <p class="value__description">
                        We are always ready to help you providing the best service. We believe a good place to live can make your life better.
                    </p>
                </div>

                <div class="value__accordion">
                    <div class="value__accordion-item">
                        <header class="value__accordion-header">
                            <i class='bx bxs-shield-x value__accordion-icon' ></i>
                            <h3 class="value__accordion-title">
                                Best interest rates in the market
                            </h3>
                            <div class="value__accordion-arrow">
                                <i class='bx bxs-down-arrow'></i>
                            </div>
                        </header>

                        <div class="value__accordion-content">
                            <p class="value__accordion-description">
                                The price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.
                            </p>
                        </div>
                    </div>

                    <div class="value__accordion-item">
                        <header class="value__accordion-header">
                            <i class='bx bxs-x-square value__accordion-icon' ></i>
                            <h3 class="value__accordion-title">
                                Prevent unstable prices
                            </h3>
                            <div class="value__accordion-arrow">
                                <i class='bx bxs-down-arrow'></i>
                            </div>
                        </header>

                        <div class="value__accordion-content">
                            <p class="value__accordion-description">
                                The price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.
                            </p>
                        </div>
                    </div>

                    <div class="value__accordion-item">
                        <header class="value__accordion-header">
                            <i class='bx bxs-bar-chart-square value__accordion-icon' ></i>
                            <h3 class="value__accordion-title">
                                Best prices on the market
                            </h3>
                            <div class="value__accordion-arrow">
                                <i class='bx bxs-down-arrow'></i>
                            </div>
                        </header>

                        <div class="value__accordion-content">
                            <p class="value__accordion-description">
                                The price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.
                            </p>
                        </div>
                    </div>

                    <div class="value__accordion-item">
                        <header class="value__accordion-header">
                            <i class='bx bxs-check-square value__accordion-icon' ></i>
                            <h3 class="value__accordion-title">
                                Security of your data
                            </h3>
                            <div class="value__accordion-arrow">
                                <i class='bx bxs-down-arrow'></i>
                            </div>
                        </header>

                        <div class="value__accordion-content">
                            <p class="value__accordion-description">
                                The price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.value__container {
    row-gap: 3rem;
    margin-top: 3rem;
}

.value__images {
    position: relative;
    display: flex;
    justify-content: center;
}

.value__orbe {
    width: 266px;
    height: 316px;
    background-color: hsl(228, 24%, 97%);
    border-radius: 135px 135px 16px 16px;
}

.value__img {
    position: absolute;
    width: 250px;
    height: 300px;
    overflow: hidden;
    border-radius: 125px 125px 12px 12px;
    inset: 0;
    margin: auto;
    box-shadow: 0 16px 32px hsla(228, 66%, 25%, .25);
}

.value__description {
    font-size: $--small-font-size;
    margin-bottom: 2rem;
}

.value__accordion {
    display: grid;
    row-gap: 1.5rem;
}

.value__accordion-item {
    background-color: $--body-color;
    border: 2px solid $--border-color;
    border-radius: .5rem;
    padding: 1rem .75rem;
}

.value__accordion-header {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.value__accordion-icon {
    background-color: $--first-color-lighten;
    padding: 5px;
    border-radius: .25rem;
    font-size: 18px;
    color: $--first-color;
    margin-right: .75rem;
    transition: .3s;
}

.value__accordion-title {
    font-size: $--small-font-size;
}

.value__accordion-arrow {
    display: inline-flex;
    background-color: $--first-color-lighten;
    padding: .25rem;
    color: $--first-color;
    border-radius: 2px;
    font-size: 10px;
    margin-left: auto;
    transition: .3s;
}

.value__accordion-arrow i {
    transition: .4s;
}

.value__accordion-description {
    font-size: $--smaller-font-size;
    padding: 1.25rem 2.5rem 0 2.75rem;
}

.value__accordion-content {
    overflow: hidden;
    height: 0;
    transition: all .25s ease;
}

</style>