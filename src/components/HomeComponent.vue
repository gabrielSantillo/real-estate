<template>
    <div class="home section" ref="home">
        <div class="home__container container grid">
            <div class="home__data">
                <h1 class="home__title">
                    Discover <br> Most Suitable <br> Property
                </h1>
                <p class="home__description">
                    Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you
                </p>

                <form action="" class="home__search">
                    <i class='bx bxs-map'></i>
                    <input type="search" placeholder="Search by location" class="home__search-input">
                    <button class="button">Search</button>
                </form>

                <div class="home__value">
                    <div>
                        <h1 class="home__value-number">
                            9k <span>+</span>
                        </h1>
                        <span class="home__value-description">
                            Premium <br> Product
                        </span>
                    </div>

                    <div>
                        <h1 class="home__value-number">
                            2k <span>+</span>
                        </h1>
                        <span class="home__value-description">
                            Happy <br> Customer
                        </span>
                    </div>

                    <div>
                        <h1 class="home__value-number">
                            28k <span>+</span>
                        </h1>
                        <span class="home__value-description">
                            Awards <br> Winning
                        </span>
                    </div>
                </div>
            </div>

            <div class="home__images">
                <div class="home__orbe"></div>

                <div class="home__img">
                    <img src="@/img/home.jpg" alt="">
                </div>
            </div>
        </div>

        <logo-component></logo-component>
    </div>
</template>

<script>
import LogoComponent from './LogoComponent.vue'
    export default {
  components: { LogoComponent },
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home {
    background: linear-gradient(170deg,
                hsl(0, 0%, 22%) 0%,
                hsl(0, 0%, 6%) 30%);
    padding-bottom: 0;
}

.home__container {
    padding-top: 4rem;
    row-gap: 3.5rem;
}

.home__title, .home__value-number {
    color: #fff;
}

.home__title {
    font-size: $--biggest-font-size;
    line-height: 120%;
    margin-bottom: 1.25rem;
}

.home__description {
    color: $--text-color-light;
    margin-bottom: 2rem;
}

.home__search {
    background-color: $--body-color;
    padding: .35rem .35rem .35rem .75rem;
    display: flex;
    align-items: center;
    border-radius: .75rem;
    border: 3px solid $--text-color-light;
    margin-bottom: 2rem;
}

.home__search i {
    font-size: 1.25rem;
    color: $--first-color;
}

.home__search-input {
    width: 90%;
    background-color: $--body-color;
    color: $--text-color;
    margin: .5rem .5rem;
}

.home__search-input::placeholder {
    color: $--text-color-light;
}

.home__value {
    display: flex;
    column-gap: 2.5rem;
}

.home__value-number {
    font-size: $--h1-font-size;
    font-weight: $--font-medium;
}

.home__value-number span {
    color: $--second-color;
}

.home__value-description {
    display: flex;
    color: $--text-color-light;
    font-size: $--smaller-font-size;
}

.home__images {
    position: relative;
    display: flex;
    justify-content: center;
}

.home__orbe {
    width: 265px;
    height: 284px;
    background: linear-gradient(180deg,
                hsl(0, 0%, 16%) 93%,
                hsl(0, 0%, 67%) 100%);
    border-radius: 135px 135px 0 0;
}

.home__img {
    position: absolute;
    width: 250px;
    height: 300px;
    overflow: hidden;
    border-radius: 125px 125px 12px 12px;
    display: inline-flex;
    align-items: flex-end;
    bottom: -1.5rem;
    box-shadow: 0 16px 32px hsla(228, 66%, 25%, .25);
}

</style>