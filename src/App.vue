<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
    export default {
  components: { HeaderComponent },
        
    }
</script>

<style lang="scss">
@import '@/scss/variables.scss';


@media screen and (min-width: 1024px) {
  :root {
  --biggest-font-size: 4rem;
  --h1-font-size: 2.25rem;
  --h2-font-size: 1.5rem;
  --h3-font-size: 1.25rem;
  --normal-font-size: 1rem;
  --small-font-size: .875rem;
  --smaller-font-size: .813rem;
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: $--body-font;
  font-size: $--normal-font-size;
  background-color: $--body-color;
  color: $--text-color;
}

h1, h2, h3 {
  color: $--title-color;
  font-weight: $--font-semi-bold;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}

input, button {
  font-family: $--body-font;
  outline: none;
  border: none;
}

.container {
  max-width: 1024px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.grid {
  display: grid;
}

.section {
  padding: 4.5rem 0 2rem;
}

.section__title {
  font-size: $--h2-font-size;
  margin-bottom: 1rem;
}

.section__title span {
  color: $--second-color;
}

.section__subtitle {
  display: block;
  font-size: $--small-font-size;
  color: $--second-color;
}

.main {
  overflow: hidden;
}

.button {
    display: inline-block;
    background: linear-gradient(101deg,
                hsl(228, 66%, 53%),
                hsl(228, 66%, 47%));
    color: #fff;
    padding: 14px 28px;
    border-radius: .5rem;
    font-size: $--normal-font-size;
    font-weight: $--font-medium;
    box-shadow: 0 4px 8px hsla(228, 66%, 45%, .25);
    transition: .3s;
    cursor: pointer;
}

.button:hover {
  box-shadow: 0 4px 12px hsla(238, 77%, 55%, .5);;
}


</style>
