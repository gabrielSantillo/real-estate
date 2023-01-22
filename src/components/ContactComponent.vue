<template>
    <div class="contact section" ref="contact">
        <div class="contact__container container grid">
            <div class="contact__images">
                <div class="contact__orbe"></div>

                <div class="contact__img">
                    <img src="@/img/contact.png" alt="">
                </div>
            </div>

            <div class="contact__content">
                <div class="contact__data">
                    <span class="section__subtitle">Contact Us</span>
                    <h2 class="section__title">
                        Easy to Contact Us<span>.</span>
                    </h2>
                    <p class="contact__description">
                        Is there a problem finding your dream home? Need a guide to buy your first home? Need a consultation about residential issues? Contact us now!
                    </p>
                </div>

                <div class="contact__card">
                    <div class="contact__card-box">
                        <div class="contact__card-info">
                            <i class='bx bxs-phone-call' ></i>
                            <div>
                                <h3 class="contact__card-title">
                                    Call
                                </h3>
                                <p class="contact__card-description">
                                    555-888-9999
                                </p>
                            </div>
                        </div>

                        <button class="button contact__card-button">
                            Call Now
                        </button>
                    </div>

                    <div class="contact__card-box">
                        <div class="contact__card-info">
                            <i class='bx bxs-message-rounded-dots' ></i>
                            <div>
                                <h3 class="contact__card_title">
                                    Chat
                                </h3>
                                <p class="contact__card-description">
                                    555-888-9999
                                </p>
                            </div>
                        </div>

                        <button class="button contact__card-button">
                            Chat Now
                        </button>
                    </div>

                    <div class="contact__card-box">
                        <div class="contact__card-info">
                            <i class='bx bxs-envelope' ></i>
                            <div>
                                <h3 class="contact__card_title">
                                    Email
                                </h3>
                                <p class="contact__card-description">
                                    555-888-9999
                                </p>
                            </div>
                        </div>

                        <button class="button contact__card-button">
                            Email Us
                        </button>
                    </div>

                    <div class="contact__card-box">
                        <div class="contact__card-info">
                            <i class='bx bxs-video' ></i>
                            <div>
                                <h3 class="contact__card_title">
                                    Video
                                </h3>
                                <p class="contact__card-description">
                                    555-888-9999
                                </p>
                            </div>
                        </div>

                        <button class="button contact__card-button">
                            Video Call Us
                        </button>
                    </div>
                </div>
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

.contact {
    background: linear-gradient(170deg,
                hsl(0, 0%, 22%) 0%,
                hsl(0, 0%, 6%) 30%);
}

.contact__container {
    row-gap: 2rem;
    margin-bottom: 6rem;
}

.contact__images {
    position: relative;
    display: flex;
    justify-content: center;
}

.contact__orbe {
    width: 266px;
    height: 316px;
    background-color: hsl(228, 24%, 97%);
    border-radius: 135px 135px 16px 16px;
}

.contact__img {
    position: absolute;
    width: 250px;
    height: 300px;
    overflow: hidden;
    border-radius: 125px 125px 12px 12px;
    inset: 0;
    margin: auto;
    box-shadow: 0 16px 32px hsla(228, 66%, 25%, .25);
}

.contact__description {
    font-size: $--small-font-size;
    margin-bottom: 2.5rem;
}

.contact__card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem .75rem;
}


.contact__card-box {
    background-color: $--body-color;
    border: 2px solid $--border-color;
    padding: 1.25rem .75rem;
    border-radius: .5rem;
    transition: .3s;
}

.contact__card-info{
    display: flex;
    align-items: flex-start;
    column-gap: .75rem;
    margin-bottom: 1.25rem;
}

.contact__card i {
    padding: 6px;
    background-color: $--first-color-lighten;
    border-radius: 6px;
    font-size: 1.25rem;
    color: $--first-color;
}

.contact__card-title {
    font-size: $--normal-font-size;
}

.contact__card-description {
    font-size: $--smaller-font-size;
}

.contact__card-button {
    font-size: $--small-font-size;
    padding: 14px 0;
    width: 100%;
    border-radius: .25rem;
    background: $--first-color-lighten;
    color: $--first-color;
    font-weight: $--font-semi-bold;
    box-shadow: none;
}

.contact__card-button:hover {
    background-color: $--first-color;
    color: #fff;
}

.contact__card-box:hover {
    box-shadow: 0 8px 24px hsla(288, 66%, 45%, .1);
}

</style>