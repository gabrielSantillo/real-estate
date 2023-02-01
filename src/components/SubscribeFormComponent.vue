<template>
    <div class="form">
        <div class="form__content">
            <img src="@/img/bg-form.png" alt="" class="form__img">

            <form action="" class="subscribe__form" v-scroll-reveal.reset="{ delay: 150 }">
                <div v-scroll-reveal.reset="{ delay: 250 }">
                    <h1 class="form__title">
                        <span>Welcome</span> Friend
                    </h1>
                    <p class="form__description">
                        Subscribe to know more.
                    </p>
                </div>

                <div>
                    <div class="form__inputs">
                        <div v-scroll-reveal.reset="{ delay: 350 }">
                            <label for="" class="form__label">First Name</label>
                            <input type="text" required placeholder="Enter your first name" class="form__input">
                        </div>

                        <div v-scroll-reveal.reset="{ delay: 450 }">
                            <label for="" class="form__label">Last Name</label>
                            <input type="text" required placeholder="Enter your last name" class="form__input">
                        </div>

                        <div v-scroll-reveal.reset="{ delay: 550 }">
                            <label for="" class="form__label">Email</label>
                            <input type="email" required placeholder="Enter Your email address" class="form__input">
                        </div>

                        <div v-scroll-reveal.reset="{ delay: 650 }">
                            <label for="" class="form__label">Phone number</label>
                            <input type="number" required placeholder="Enter your phone number" class="form__input">
                        </div>

                        <div v-scroll-reveal.reset="{ delay: 750 }">
                            <label for="" class="form__label">Budget</label>
                            <input type="number" required placeholder="Enter your budget" class="form__input">
                        </div>
                    </div>
                </div>

                <div class="form__buttons" v-scroll-reveal.reset="{ delay: 550 }">
                    <button class="form__button">Subscribe</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.form {
    background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
    padding-top: 4.5rem;
}

.form__content, .subscribe__form, .form__inputs {
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
    background-color: hsla(244, 16%, 92%, .6);
    border: 2px solid hsla(244, 16%, 92%, .75);
    margin-inline: 1.5rem;
    row-gap: 1.25rem;
    backdrop-filter: blur(20px);
    padding: 2rem;
    border-radius: 1rem;
}

.form__title {
    color: #000;
    font-size: $--h2-font-size;
    margin-bottom: .5rem;
}

.form__title span {
    color: $--first-color;
}

.form__description {
    font-size: $--small-font-size;
}

.form__inputs {
    row-gap: .75rem;
    margin-bottom: .5rem;
}

.form__label {
    display: block;
    color: $--first-color;
    font-size: $--small-font-size;
    font-weight: $--font-semi-bold;
    margin-bottom: .25rem;
}

.form__input {
    width: 100%;
    padding: 10px 8px;
    border-radius: 4px;
    border: 2px solid $--first-color;
    background-color: hsla(244, 16%, 92%, .6);
    color: #000;
    font-size: $--smaller-font-size;
    font-weight: $--font-medium;
    transition: border .4s;
}

.form__input:focus, .form__input:valid {
    border: 2px solid $--first-color-lighten;
}

.form__button {
    display: grid;
}

.form__button {
    padding: 14px 1rem;
    border-radius: 6px;
    background: linear-gradient(76deg,
                $--first-color,
                $--first-color-alt);
    color: #FFF;
    font-size: $--small-font-size;
    font-weight: $--font-semi-bold;
    box-shadow: 0 6px 24px hsla(228, 66%, 53%, .5);
    transition: .3s;
    cursor: pointer;
}

.form__button:hover {
    box-shadow: 0 6px 24px hsla(228, 66%, 53%, .8);
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