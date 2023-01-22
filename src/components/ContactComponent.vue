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
                                    real@estate.com
                                </p>
                            </div>
                        </div>

                        <button class="button contact__card-button">
                            Email Us
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
.contact {
    background: linear-gradient(170deg,
                hsl(0, 0%, 22%) 0%,
                hsl(0, 0%, 6%) 30%);
}

</style>