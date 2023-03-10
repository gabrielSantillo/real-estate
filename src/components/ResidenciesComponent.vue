<template>
  <div class="section popular residencies" ref="popular">
    <div class="container">
      <span
        class="section__subtitle"
        v-scroll-reveal.reset="{ delay: 250, origin: 'right' }"
      >
        {{ city_name }}
      </span>
      <h2 class="section__title residencies__title">Popular Residencies</h2>

      <div
        class="popular__container"
      >
        <div>
          <article
            class="popular__card"
            v-for="(residencie, index) in residencies"
            :key="index"
          >
            <img :src="residencie['image']" alt="" class="popular__img" />

            <div class="popular__data">
              <h2 class="popular__price">
                <span>$</span>{{ residencie["price"] }}
              </h2>
              <h3 class="popular__title">{{ residencie["sqft"] }} sqft</h3>
              <p class="popular__description">
                {{ residencie["address"] }}
              </p>
              <p class="popular__description">
                Category:
                {{
                  residencie["category"][0].toUpperCase() +
                  residencie["category"].substring(1)
                }}
              </p>
              <p class="popular__description">
                City:
                {{
                  residencie["city"][0].toUpperCase() +
                  residencie["city"].substring(1)
                }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  methods: {
    get_files(residencies) {
      // looping trough the items list to make an axios request for each item
      for (let i = 0; i < residencies.length; i++) {
        axios
          .request({
            // Standard URL and params
            url: `/api/residencies-images`,
            params: {
              file_name: residencies[i]["image"],
            },
            // This lets axios know to expect a blob (one way to represent a file)
            responseType: "blob",
          })
          .then((response) => {
            // Cool built in function that allows us to take file data and create a URL for it
            // This is so we can use it for things like image src and such
            let src = URL.createObjectURL(response["data"]);
            /* adding this paths since they strings to the images_src array to then, loop through this array and print the images onto the page */
            this.residencies[i]["image"] = src;
          })
          .catch((error) => {
            error;
          });
      }
    },
  },
  data() {
    return {
      residencies: undefined,
      city_name: "Best Choice",
    };
  },

  mounted() {
    if (cookies.get("city_id")) {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/residencies`,
          params: {
            city_id: `${cookies.get("city_id")}`,
          },
        })
        .then((response) => {
          this.residencies = response["data"];
          this.get_files(this.residencies);
          this.city_name =
            this.residencies[0]["city"][0].toUpperCase() +
            this.residencies[0]["city"].substring(1);
        })
        .catch((error) => {
          error;
          /* on failure show the user a message */
          alert(`Sorry, an error have occured.`);
        });
    } else {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/residencies`,
        })
        .then((response) => {
          this.residencies = response["data"];
          this.get_files(this.residencies);
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

.section__title {
  color: white;
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
  max-height: 220px;
  width: 100%;
  object-fit: cover;
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
    padding: 0 0.25rem 0 0.75rem;
  }
}
</style>
