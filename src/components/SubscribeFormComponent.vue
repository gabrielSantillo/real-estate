<template>
    <div class="form">
        <div class="form__content">
            <img src="@/img/bg-form.png" alt="" class="form__img">

            <form action="" class="subscribe__form">
                <div>
                    <h1 class="form__title">
                        <span>Welcome</span> Back
                    </h1>
                    <p class="form__description">
                        Subscribe to know more.
                    </p>
                </div>

                <div>
                    <div class="form__inputs">
                        <div>
                            <label for="" class="form__label">Email</label>
                            <input type="email" required placeholder="Enter Your email address" class="form__input">
                        </div>

                        <div>
                            <label for="" class="form__label">Full Name</label>
                            <input type="text" required placeholder="Enter your full name" class="form__input">
                        </div>
                    </div>
                </div>

                <div class="form__buttons">
                    <button class="form__button">Register</button>
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
    background-color: $--first-color-light;
    padding-top: 4.5rem;
}

.form__content, .subscribe__form, .form__inputs {
    
}
</style>