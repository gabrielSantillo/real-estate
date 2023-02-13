<template>
  <div class="value section" ref="value">
    <div class="value__container container grid">
      <div class="value__images" v-scroll-reveal.reset="{ delay: 250, origin: 'left' }">
        <div class="value__orbe"></div>

        <div class="value__img" >
          <img src="@/img/value.jpg" alt="" />
        </div>
      </div>

      <div class="value__content">
        <div class="value__data" v-scroll-reveal.reset="{ delay: 350, origin: 'right' }">
          <span class="section__subtitle">Our Value</span>
          <h2 class="section__title">Value We Give To You<span>.</span></h2>
          <p class="value__description">
            We are always ready to help you providing the best service. We
            believe a good place to live can make your life better.
          </p>
        </div>

        <div class="value__accordion">
          <div class="value__accordion-item" v-scroll-reveal.reset="{ delay: 450, origin: 'left' }">
            <header
              class="value__accordion-header"
              ref="one"
              @click="is_active_one = !is_active_one"
            >
              <i class="bx bxs-shield-x value__accordion-icon"></i>
              <h3 class="value__accordion-title">
                Best interest rates in the market
              </h3>
              <div class="value__accordion-arrow">
                <i class="bx bxs-down-arrow" v-if="!is_active_one"></i>
                <i class="bx bxs-up-arrow" v-if="is_active_one"></i>
              </div>
            </header>

            <div class="value__accordion-content" v-if="is_active_one">
              <p class="value__accordion-description">
                The price we provides is the best for you, we guarantee no price
                changes on your property due to various unexpected costs that
                may come.
              </p>
            </div>
          </div>

          <div class="value__accordion-item" v-scroll-reveal.reset="{ delay: 550, origin: 'right' }">
            <header
              class="value__accordion-header"
              @click="is_active_two = !is_active_two"
            >
              <i class="bx bxs-x-square value__accordion-icon"></i>
              <h3 class="value__accordion-title">Prevent unstable prices</h3>
              <div class="value__accordion-arrow">
                <i class="bx bxs-down-arrow" v-if="!is_active_two"></i>
                <i class="bx bxs-up-arrow" v-if="is_active_two"></i>
              </div>
            </header>

            <div class="value__accordion-content" v-if="is_active_two">
              <p class="value__accordion-description">
                The price we provides is the best for you, we guarantee no price
                changes on your property due to various unexpected costs that
                may come.
              </p>
            </div>
          </div>

          <div class="value__accordion-item" v-scroll-reveal.reset="{ delay: 650, origin: 'left' }">
            <header
              class="value__accordion-header"
              @click="is_active_three = !is_active_three"
            >
              <i class="bx bxs-bar-chart-square value__accordion-icon"></i>
              <h3 class="value__accordion-title">Best prices on the market</h3>
              <div class="value__accordion-arrow">
                <i class="bx bxs-down-arrow" v-if="!is_active_three"></i>
                <i class="bx bxs-up-arrow" v-if="is_active_three"></i>
              </div>
            </header>

            <div class="value__accordion-content" v-if="is_active_three">
              <p class="value__accordion-description">
                The price we provides is the best for you, we guarantee no price
                changes on your property due to various unexpected costs that
                may come.
              </p>
            </div>
          </div>

          <div class="value__accordion-item" v-scroll-reveal.reset="{ delay: 750, origin: 'right' }">
            <header
              class="value__accordion-header"
              @click="is_active_four = !is_active_four"
            >
              <i class="bx bxs-check-square value__accordion-icon"></i>
              <h3 class="value__accordion-title">Security of your data</h3>
              <div class="value__accordion-arrow">
                <i class="bx bxs-down-arrow" v-if="!is_active_four"></i>
                <i class="bx bxs-up-arrow" v-if="is_active_four"></i>
              </div>
            </header>

            <div class="value__accordion-content" v-if="is_active_four">
              <p class="value__accordion-description">
                The price we provides is the best for you, we guarantee no price
                changes on your property due to various unexpected costs that
                may come.
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
  data() {
    return {
      is_active_one: false,
      is_active_two: false,
      is_active_three: false,
      is_active_four: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.value {
  background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
}

.section__title {
  color: white;
}

.value__container {
  row-gap: 3rem;
  margin-top: 3rem;
  margin-bottom: 9rem;
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
  box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.25);
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
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
}

.value__accordion-header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.value__accordion-icon {
  background-color: $--first-color-lighten;
  padding: 5px;
  border-radius: 0.25rem;
  font-size: 18px;
  color: $--first-color;
  margin-right: 0.75rem;
  transition: 0.3s;
}

.value__accordion-title {
  font-size: $--small-font-size;
}

.value__accordion-arrow {
  display: inline-flex;
  background-color: $--first-color-lighten;
  padding: 0.25rem;
  color: $--first-color;
  border-radius: 2px;
  font-size: 10px;
  margin-left: auto;
  transition: 0.3s;
}

.value__accordion-arrow i {
  transition: 0.4s;
}

.value__accordion-description {
  font-size: $--smaller-font-size;
  padding: 1.25rem 2.5rem 0 2.75rem;
}

.value__accordion-content {
  overflow: hidden;
  transition: all 0.25s ease;
}

@media screen and (min-width: 767px) {
  .value__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
}

@media screen and (min-width: 1024px) {
  .value__container {
    align-items: flex-start;
    column-gap: 5rem;
  }

  .value__orbe {
    width: 501px;
    height: 641px;
    border-radius: 258px 258px 16px 16px;
  }

  .value__img {
    width: 461px;
    height: 601px;
    border-radius: 238px 238px 12px 12px;
  }

  .value__img img {
    max-width: initial;
    width: 490px;
  }

  .value__description {
    font-size: $--normal-font-size;
    margin-bottom: 2.5rem;
  }

  .value__accordion-title {
    font-size: $--normal-font-size;
  }

  .value__accordion-item {
    padding: 1.25rem 1.25rem 1.25rem 1rem;
  }

  .value__accordion-description {
    padding-bottom: 1rem;
    font-size: $--small-font-size;
  }
}

@media screen and (min-width: 1040px) {
  .value__container {
    padding-left: 10rem;
    padding-right: 10rem;
  }
}
</style>
