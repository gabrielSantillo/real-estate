<template>
  <div class="subscribe section">
    <div class="subscribe__container container">
      <h1 class="subscribe__title">Get Started with Real Estate</h1>
      <p class="subscribe__description">
        Subscribe and find super attractive price quotes from us. Find your
        residence soon.
      </p>
      <a class="button subscribe__button" @click="go_to">Get Started</a>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies"
export default {
  methods: {
    go_to() {
      this.$router.push(`/subscribe`);
      cookies.set("turn_home_off", 1)
      location.reload()
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.subscribe__container {
  background-color: $--first-color;
  padding: 3rem 2rem;
  border-radius: 1.25rem;
  border: 6px solid $--first-color-light;
  text-align: center;
}

.subscribe__title {
  font-size: $--h2-font-size;
  color: #fff;
  margin-bottom: 1rem;
}

.subscribe__description {
  color: hsl(228, 90%, 92%);
  font-size: $--small-font-size;
  margin-bottom: 2rem;
}

.subscribe__button {
  border: 2px solid #fff;
  background: $--first-color-light;
  font-size: $--small-font-size;
}

.subscribe__button:hover {
  background-color: $--first-color;
}

@media screen and (min-width: 767px) {
  .subscribe__container {
    padding: 3rem 13rem;
  }
}

@media screen and (min-width: 1024px) {
  .subscribe__container {
    padding: 4rem 10rem 4.5rem;
    border-radius: 2rem;
    border: 12px solid $--first-color-light;
  }

  .subscribe__title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .subscribe__description {
    font-size: $--normal-font-size;
    padding: 0 8rem;
  }

  .subscribe__button {
    font-size: $--normal-font-size;
  }
}

@media screen and (min-width: 1040px) {
  .subscribe {
    padding-left: 10rem;
    padding-right: 10rem;
  }
}
</style>
