<template>
    <div class="footer section">
        <div class="footer__container container grid">
            <div>
                <a href="" class="footer__logo">
                    Real Estate <i class='bx bxs-home-alt-2' ></i>
                </a>

                <p class="footer__description">
                    Our vision is to make all people <br>
                    the best place to live for them.
                </p>
            </div>

            <div class="footer__content">
                <div>
                    <h3 class="footer__title">
                        About
                    </h3>

                    <ul class="footer__links">
                        <li>
                            <a href="" class="footer__link">About Us</a>
                        </li>
                        <li>
                            <a href="" class="footer__link">Features</a>
                        </li>
                        <li>
                            <a href="" class="footer__link">News & Blog</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="footer__title">
                        Company
                    </h3>

                    <ul class="footer__links">
                        <li>
                            <a href="" class="footer__link">How we work?</a>
                        </li>
                        <li>
                            <a href="" class="footer__link">Capital</a>
                        </li>
                        <li>
                            <a href="" class="footer__link">Security</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="footer__title">
                        Support
                    </h3>

                    <ul class="footer__links">
                        <li>
                            <a href="" class="footer__link">FAQs</a>
                        </li>
                        <li>
                            <a href="" class="footer__link">Support center</a>
                        </li>
                        <li>
                            <a href="" class="footer__link">Contact us</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="footer__title">
                        Follow me
                    </h3>

                    <ul class="footer__social">
                        <li>
                            <a href="https://www.linkedin.com/in/gabriel-santillo/" class="footer__social-link" target="_blank"><i class='bx bxl-linkedin-square' ></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/gabrielSantillo" class="footer__social-link" target="_blank"><i class='bx bxl-github' ></i></a>
                        </li>
                        <li>
                            <a href="https://gabrielsantillo.com/" class="footer__social-link" target="_blank">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer__info container">
            <span class="footer__copy">
                All rights reserved
            </span>

            <div class="footer__privacy">
                <a href="">Terms & Agreements</a>
                <a href="">Privacy Policy</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.footer__container {
    row-gap: 2.5rem;
}

.footer__logo {
    color: $--first-color;
    font-size: $--h3-font-size;
    font-weight: $--font-semi-bold;
    display: inline-flex;
    align-items: center;
    column-gap: .25rem;
    margin-bottom: .75rem;
}

.footer__logo i {
    font-size: 1.25rem;
}

.footer__description, .footer__link {
    font-size: $--small-font-size;
    font-weight: $--font-medium;
}

.footer__content, .footer__links {
    display: grid;
}

.footer__content {
    grid-template-columns: repeat(2, max-content);
    gap: 2.5rem 4rem;
}

.footer__title {
    font-size: $--h3-font-size;
    margin-bottom: 1rem;
}

.footer__links {
    row-gap: .5rem;
}

.footer__link {
    color: $--text-color;
    transition: .3s;
}

.footer__link:hover {
    color: $--title-color;
}

.footer__social {
    display: flex;
    column-gap: 1rem;
}

.footer__social-link {
    font-size: 1.25rem;
    color: $--text-color;
    transition: .3s;
}

.footer__social-link:hover {
    color: $--title-color;
}

.footer__info, .footer__privacy {
    display: flex;
}

.footer__info {
    padding-bottom: 6rem;
    margin-top: 5.5rem;
    flex-direction: column;
    text-align: center;
    row-gap: 1.5rem;
}

.footer__copy, .footer__privacy a {
    font-size: $--smaller-font-size;
    font-weight: $--font-medium;
    color: $--text-color;
}

.footer__privacy {
    justify-content: center;
    column-gap: 1.25rem;
}

@media screen and (min-width: 576px) {
    .footer__content {
    grid-template-columns: repeat(3, max-content);
  }
}

@media screen and (min-width: 767px) {
    .footer__container {
        grid-template-columns: repeat(2, max-content);
        justify-content: space-between;
    }
}

</style>