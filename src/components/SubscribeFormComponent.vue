<template>
  <div class="form">
    <div class="form__content">
      <img src="@/img/bg-form.png" alt="" class="form__img" />

      <form
        action=""
        class="subscribe__form"
        v-scroll-reveal.reset="{ delay: 150 }"
      >
        <div v-scroll-reveal.reset="{ delay: 250 }">
          <h1 class="form__title"><span>Welcome</span> Friend</h1>
          <p class="form__description">Subscribe to know more.</p>
        </div>

        <div>
          <div class="form__inputs">
            <div v-scroll-reveal.reset="{ delay: 350 }">
              <label for="" class="form__label">First Name</label>
              <input
                type="text"
                required
                placeholder="Enter your first name"
                class="form__input"
                ref="first_name"
              />
            </div>

            <div v-scroll-reveal.reset="{ delay: 450 }">
              <label for="" class="form__label">Last Name</label>
              <input
                type="text"
                required
                placeholder="Enter your last name"
                class="form__input"
                ref="last_name"
              />
            </div>

            <div v-scroll-reveal.reset="{ delay: 550 }">
              <label for="" class="form__label">Email</label>
              <input
                type="email"
                required
                placeholder="Enter Your email address"
                class="form__input"
                ref="email"
              />
            </div>

            <div v-scroll-reveal.reset="{ delay: 650 }">
              <label for="" class="form__label">Phone number</label>
              <input
                type="number"
                required
                placeholder="Enter your phone number"
                class="form__input"
                ref="phone_number"
              />
            </div>

            <div v-scroll-reveal.reset="{ delay: 750 }">
              <label for="" class="form__label">Budget</label>
              <input
                type="number"
                required
                placeholder="Enter your budget"
                class="form__input"
                ref="budget"
              />
            </div>
            <div v-scroll-reveal.reset="{ delay: 750 }">
              <p class="form__label">Preferable City</p>
              <div class="form__radio">
                <div>
                  <input
                    type="radio"
                    ref="calgary"
                    name="city"
                    value="1"
                    checked
                  />
                  <label for="calgary">Calgary</label>
                </div>

                <div>
                  <input type="radio" ref="vancouver" name="city" value="2" />
                  <label for="vancouver">Vancouver</label>
                </div>

                <div>
                  <input type="radio" ref="toronto" name="city" value="3" />
                  <label for="toronto">Toronto</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form__buttons" v-scroll-reveal.reset="{ delay: 850 }">
          <button class="form__button" @click="subscribe">Subscribe</button>
        </div>
      </form>
    </div>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      snackbar: false,
      text: "You have successfully subscribed!",
      timeout: 5000,
    };
  },
  methods: {
    subscribe() {
      axios
        .request({
          url: `http://127.0.0.1:5000/api/client`,
          method: `POST`,
          data: {
            email: this.$refs[`email`][`value`],
            preferable_city: document.querySelector(
              'input[name="city"]:checked'
            ).value,
            first_name: this.$refs[`first_name`][`value`],
            last_name: this.$refs[`last_name`][`value`],
            phone_number: this.$refs[`phone_number`][`value`],
            budget: parseFloat(this.$refs[`budget`][`value`]),
          },
        })
        .then((response) => {
          this.snackbar = true
          response;
        })
        .catch((error) => {
          error;
        });
    },

    test() {
      alert("hiiii");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.form {
  background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
  padding-top: 4.5rem;
}

.form__content,
.subscribe__form,
.form__inputs {
  display: grid;
}

.form__content {
  position: relative;
  height: 100vh;
  align-items: center;
}

.form__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.subscribe__form {
  position: relative;
  background-color: hsla(244, 16%, 92%, 0.6);
  border: 2px solid hsla(244, 16%, 92%, 0.75);
  margin-inline: 1.5rem;
  row-gap: 1.25rem;
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 1rem;
}

.form__title {
  color: #000;
  font-size: $--h2-font-size;
  margin-bottom: 0.5rem;
}

.form__title span {
  color: $--first-color;
}

.form__description {
  font-size: $--small-font-size;
}

.form__inputs {
  row-gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.form__label {
  display: block;
  color: $--first-color;
  font-size: $--small-font-size;
  font-weight: $--font-semi-bold;
  margin-bottom: 0.25rem;
}

.form__input {
  width: 100%;
  padding: 10px 8px;
  border-radius: 4px;
  border: 2px solid $--first-color;
  background-color: hsla(244, 16%, 92%, 0.6);
  color: #000;
  font-size: $--smaller-font-size;
  font-weight: $--font-medium;
  transition: border 0.4s;
}

.form__input:focus,
.form__input:valid {
  border: 2px solid $--first-color-lighten;
}

.form__radio {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;

  > div {
    display: grid;
    grid-auto-flow: column;

    > input {
      margin-right: 2px;
    }
  }
}

.form__button {
  display: grid;
}

.form__button {
  padding: 14px 1rem;
  border-radius: 6px;
  background: linear-gradient(76deg, $--first-color, $--first-color-alt);
  color: #fff;
  font-size: $--small-font-size;
  font-weight: $--font-semi-bold;
  box-shadow: 0 6px 24px hsla(228, 66%, 53%, 0.5);
  transition: 0.3s;
  cursor: pointer;
}

.form__button:hover {
  box-shadow: 0 6px 24px hsla(228, 66%, 53%, 0.8);
}

@media screen and (min-width: 576px) {
  .subscribe__form {
    width: 450px;
    justify-self: center;
  }
}

@media screen and (min-width: 1064px) {
}
</style>
