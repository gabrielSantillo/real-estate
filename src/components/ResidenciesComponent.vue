<template>
  <div class="section popular residencies" ref="popular">
    <div class="container">
      <span class="section__subtitle"> Best Choice </span>
      <h2 class="section__title">Popular Residencies</h2>

      <div
        class="popular__container"
      >
        <div>
          <article class="popular__card">
            <img src="@/img/popular1.jpg" alt="" class="popular__img" />

            <div class="popular__data">
              <h2 class="popular__price"><span>$</span>66,356</h2>
              <h3 class="popular__title">Garden City Assat</h3>
              <p class="popular__description">
                Street The Garden City of Miraflores, Lima - peru Av Sol #9876
              </p>
            </div>
          </article>
          <article class="popular__card">
            <img src="@/img/popular2.jpg" alt="" class="popular__img" />

            <div class="popular__data">
              <h2 class="popular__price"><span>$</span>66,356</h2>
              <h3 class="popular__title">Garden City Assat</h3>
              <p class="popular__description">
                Street The Garden City of Miraflores, Lima - peru Av Sol #9876
              </p>
            </div>
          </article>
          <article class="popular__card">
            <img src="@/img/popular3.jpg" alt="" class="popular__img" />

            <div class="popular__data">
              <h2 class="popular__price"><span>$</span>66,356</h2>
              <h3 class="popular__title">Garden City Assat</h3>
              <p class="popular__description">
                Street The Garden City of Miraflores, Lima - peru Av Sol #9876
              </p>
            </div>
          </article>
          <article class="popular__card">
            <img src="@/img/popular4.jpg" alt="" class="popular__img" />

            <div class="popular__data">
              <h2 class="popular__price"><span>$</span>66,356</h2>
              <h3 class="popular__title">Garden City Assat</h3>
              <p class="popular__description">
                Street The Garden City of Miraflores, Lima - peru Av Sol #9876
              </p>
            </div>
          </article>
          <article class="popular__card">
            <img src="@/img/popular5.jpg" alt="" class="popular__img" />

            <div class="popular__data">
              <h2 class="popular__price"><span>$</span>66,356</h2>
              <h3 class="popular__title">Garden City Assat</h3>
              <p class="popular__description">
                Street The Garden City of Miraflores, Lima - peru Av Sol #9876
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.residencies {
  background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
  padding-bottom: 0;
}

.popular__container {
  padding: 1rem 0 5rem;
}

.popular__container div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  column-gap: 32px;
  justify-content: center;
}

.popular__card {
  width: 290px;
  background-color: $--container-color;
  padding-bottom: 1.5rem;
  border-radius: 1rem;
  margin: 0 auto;
  transition: 0.4s;
  margin-bottom: 2rem;
}

.popular__img {
  border-radius: 1rem 1rem 0 0;
  margin-bottom: 1rem;
}

.popular__data {
  padding: 0 1rem 0 1rem;
}

.popular__price {
  font-size: $--h2-font-size;
  color: $--text-color;
  margin-bottom: 0.25rem;
  padding: 0 1rem;
}

.popular__price span {
  color: $--second-color;
  
}

.popular__title {
  font-size: $--h3-font-size;
  margin-bottom: 0.75rem;
  padding: 0 1rem;
}

.popular__description {
  font-size: $--small-font-size;
  padding: 0 1rem;
}

.popular__card:hover {
  cursor: pointer;
  transform: scale(1.025);
}

@media screen and (min-width: 1024px) {
  .popular__container {
    padding-top: 3rem;
  }

  .popular__card {
    width: 320px;
  }

  .popular__data {
    padding: 0 .25rem 0 .75rem;
  }

  .popular__price {
    font-size: 1.75rem;
  }

  .popular__title {
    font-size: 1.5rem;
  }

  .popular__description {
    font-size: 1rem;
  }
}
</style>
