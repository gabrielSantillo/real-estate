<template>
    <div class="header" ref="header">
        <nav class="nav container">
            <a href="#" class="nav__logo">
                Real Estate <i class='bx bxs-home-alt-2'></i>
            </a>

            <div class="nav__menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a class="nav__link active-link" ref="home" @click="go_to('')">
                            <i class='bx bx-home-alt-2' ></i>
                            <span>Home</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a class="nav__link" ref="residencies" @click="go_to('residencies')">
                            <i class='bx bx-building-house' ></i>
                            <span>Residences</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" ref="values" @click="go_to('values')">
                            <i class='bx bx-award' ></i>
                            <span>Value</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" ref="contact" @click="go_to('contact')">
                            <i class='bx bx-phone' ></i>
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>

            <a href="#" class="button nav__button" @click="go_to('subscribe')">
                Subscribe
            </a>
        </nav>
    </div>
</template>

<script>
import debounce from 'lodash/debounce';
import cookies from "vue-cookies"

    export default {
  methods: {
    go_to(ref) {
        this.$router.push(`/${ref}`);
        if (ref === "") {
            cookies.set('ref', `home`)
        } else {
            cookies.set('ref', `${ref}`)
        }

        location.reload()

    },
    handleScroll() {
        
      if (window.scrollY >= 50) {
        this.$refs.header.classList.add('scroll-header')
      } else {
        this.$refs.header.classList.remove('scroll-header')
      }
    }
  },

  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 50);
    window.addEventListener('scroll', this.handleDebouncedScroll);

    let ref = cookies.get('ref')
    if(ref === "home") {
        this.$refs.home.classList.add('active-link')
    } else if(ref === "residencies") {
        this.$refs.home.classList.remove('active-link')
        this.$refs.residencies.classList.add('active-link')
    } else if(ref === "values") {
        this.$refs.home.classList.remove('active-link')
        this.$refs.values.classList.add('active-link')
    } else if(ref === "contact") {
        this.$refs.home.classList.remove('active-link')
        this.$refs.contact.classList.add('active-link')
    }
  },

  beforeDestroy() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  }
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    z-index: $--z-fixed;
    transition: .4s;
}

.nav {
    height: $--header-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__logo {
    color: #fff;
    display: inline-flex;
    align-items: center;
    column-gap: .25rem;
    transition: .3s;
    font-weight: $--font-medium;
}

.nav__logo i{
    font-size: 1rem;
}

.nav__logo:hover {
    color: $--first-color;
}

@media screen and (max-width: 1023px) {
    .nav__menu {
        position: fixed;
        bottom: 2rem;
        background-color: $--container-color;
        box-shadow: 0 8px 24px hsla(228, 66%, 45%, .15);
        width: 90%;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 1.30rem 3rem;
        border-radius: 1.25rem;
        transition: .4s;
    }

    .nav__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav__link {
        color: $--text-color;
        display: flex;
        padding: .5rem;
        border-radius: 50%;
    }

    .nav__link i{
        font-size: 1.25rem;
    }

    .nav__link span{
        display: None;
    }
}

.nav__button {
  display: none;
}

.scroll-header {
    background-color: $--body-color;
    box-shadow: 0 1px 4px hsla(228, 4%, 15%, .1);
}

.scroll-header .nav__logo{
    color: $--first-color;
}

.active-link {
    background: linear-gradient(101deg,
                hsl(228, 66%, 53%),
                hsl(228, 66%, 47%));
    color: #fff;
    box-shadow: 0 4px 8px hsla(228, 66%, 45%, .25);
}
</style>