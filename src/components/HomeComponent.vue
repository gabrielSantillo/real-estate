<template>
  <div class="home section" ref="home">
    <div class="home__container container grid">
      <div class="home__data">
        <h1 class="home__title" v-scroll-reveal.reset="{ delay: 250 }">
          Discover <br />
          Most Suitable <br />
          Property
        </h1>
        <p class="home__description" v-scroll-reveal.reset="{ delay: 250 }">
          Find a variety of properties that suit you very easily, forget all
          difficulties in finding a residence for you
        </p>

        <form action="" class="home__search" v-scroll-reveal.reset="{ delay: 350 }">
          <i class="bx bxs-map"></i>
          <input
            type="search"
            placeholder="Search by location"
            class="home__search-input"
            ref="search"
          />
          <button class="button" @click="make_search">Search</button>
        </form>

        <div class="home__value" v-scroll-reveal.reset="{ delay: 450 }">
          <div>
            <h1 class="home__value-number">9k <span>+</span></h1>
            <span class="home__value-description">
              Premium <br />
              Product
            </span>
          </div>

          <div>
            <h1 class="home__value-number">2k <span>+</span></h1>
            <span class="home__value-description">
              Happy <br />
              Customer
            </span>
          </div>

          <div>
            <h1 class="home__value-number">28k <span>+</span></h1>
            <span class="home__value-description">
              Awards <br />
              Winning
            </span>
          </div>
        </div>
      </div>

      <div class="home__images" v-scroll-reveal.reset="{ delay: 450 }">
        <div class="home__orbe"></div>

        <div class="home__img">
          <img src="@/img/home.jpg" alt="" />
        </div>
      </div>
    </div>

    <logo-component></logo-component>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import LogoComponent from "./LogoComponent.vue";
export default {
  components: { LogoComponent },

  methods: {
    make_search() {
      let search = this.$refs[`search`][`value`]
      search = search[0].toLowerCase() + search.substring(1);

      if(search === "calgary") {
        cookies.set('city_id', 1)
        cookies.set("ref", `residencies`);
        this.$router.push(`/residencies`);
      } else if(search === "vancouver") {
        cookies.set("ref", `residencies`);
        cookies.set('city_id', 2)
        this.$router.push(`/residencies`);
      } else if(search === "toronto") {
        cookies.set("ref", `residencies`);
        cookies.set('city_id', 3)
        this.$router.push(`/residencies`);
      }
       else {
        alert('Please, chose between Calgary, Vancouver or Toronto.')
        return
       }

    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.home {
  background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
  padding-bottom: 0;
}

.home__container {
  padding-top: 4rem;
  row-gap: 3.5rem;
}

.home__title,
.home__value-number {
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
  padding: 0.35rem 0.35rem 0.35rem 0.75rem;
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
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
  margin: 0.5rem 0.5rem;
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
  background: linear-gradient(
    180deg,
    hsl(0, 0%, 16%) 93%,
    hsl(0, 0%, 67%) 100%
  );
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
  box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.25);
}

@media screen and (min-width: 767px) {
  .home__container {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 2rem;
  }

  .home__orbe {
    align-self: flex-end;
  }

  .home__data {
    padding-bottom: 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .home__title {
    font-size: 3.75rem;
    margin-bottom: 2rem;
  }

  .home {
    padding-bottom: 0;
  }

  .home__container {
    padding-top: 3rem;
    column-gap: 2rem;
  }

  .home__data {
    padding-bottom: 4rem;
  }

  .home__description, .home__search {
    margin-bottom: 3rem;
  }

  .home__value {
    column-gap: 3.5rem;
  }

  .home__orbe {
    width: 504px;
    height: 611px;
    border-radius: 256px 256px 0 0;
  }

  .home__img {
    width: 472px;
    height: 634px;
    border-radius: 236px 236px 12px 12px;
    bottom: -2.5rem;
  }
}

@media screen and (min-width: 1040px) {
  .home__container {
    column-gap: 8rem;
    padding-left: 10rem;
    padding-right: 10rem;
  }
}
</style>
