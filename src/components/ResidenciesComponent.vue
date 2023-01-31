<template>
  <div class="section popular residencies" ref="popular">
    <div class="container">
      <span class="section__subtitle" v-scroll-reveal.reset="{ delay: 250, origin: 'right' }"> {{city_name}} </span>
      <h2 class="section__title" v-scroll-reveal.reset="{ delay: 350, origin: 'left' }">Popular Residencies</h2>

      <div
        class="popular__container" v-scroll-reveal.reset="{ delay: 550, origin: 'bottom' }"
      >
        <div>
          <article class="popular__card" v-for="(residencie, index) in residencies" :key="index">
            <img src="@/img/popular1.jpg" alt="" class="popular__img" />

            <div class="popular__data">
              <h2 class="popular__price"><span>$</span>{{residencie['price']}}</h2>
              <h3 class="popular__title">{{residencie['sqft']}} sqft</h3>
              <p class="popular__description">
                {{residencie['address']}}
              </p>
              <p class="popular__description">
                Category: {{residencie['category'][0].toUpperCase() + residencie['category'].substring(1)}}
              </p>
              <p class="popular__description">
                City: {{residencie['city'][0].toUpperCase() + residencie['city'].substring(1)}}
              </p>
            </div>
          </article>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"
export default {
  data() {
    return {
      residencies: undefined,
      city_name: "Best Choice"
    }
  },

  mounted () {
    if(cookies.get('city')) {
      this.residencies = cookies.get('city');
      this.city_name = this.residencies[0]['city'][0].toUpperCase() + this.residencies[0]['city'].substring(1)
    }
    else {
      axios
        .request({
          url: `http://127.0.0.1:5000/api/residencies`,
        })
        .then((response) => {
          this.residencies = response['data']
        })
        .catch((error) => {
          error;
          /* on failure show the user a message */
          alert(`Sorry, an error have occured.`);
        });
    }
  },
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
  padding: 1rem 0 1rem 1rem;
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
  padding-left: 1rem;
  padding-right: 1.5rem;
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
}
</style>
