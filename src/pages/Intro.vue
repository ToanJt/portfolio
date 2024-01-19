
<template>
    <div class="h-screen py-[32px]">
        <section class="main flex lg:px-[60px] px-[30px] sm:ml-8 ml-4 sm:mt-[17rem] mt-[15rem] short:mt-[10rem]">
            <div class="container mx-auto w-[1140px] md:pl-6 pl-0">
                <div class="flex flex-col items-start">
                    <h1
                        class="text-wrap text-left font-montserrat lg:text-[92px] md:text-[85px] text-[66px] lg:leading-[96px] md:leading-[86px] leading-[68px] font-semibold">
                        <p class="text-pink-700">Howdy,</p>
                        <p class="block sm:inline">I'm </p>
                        <span style="--i:0;" data-text="LeToan" class="block">LeToan</span>
                        <span style="--i:1;" data-text="Freelancer" class="block">Freelancer</span>
                        <span style="--i:2;" data-text="Developer" class="block">Developer</span>
                    </h1>
                    <div class="has-line relative ml-2 flex mt-16 items-center">
                        <div
                            class="rounded-full mr-6 flex justify-center items-center md:w-18 md:h-18 sm:w-16 sm:h-16 w-14 h-14 radius-18 border border-white border-solid">
                            <i class=" fa-solid fa-play"></i>
                        </div>
                        <div>
                            <p class="md:text-lg sm:text-base text-sm">Watch Resume</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
h1 span {
    position: relative;
    color: rgba(255, 255, 255, 0.1);
    animation: displayText 9s infinite;
    animation-delay: calc(-3s * var(--i));
}

@keyframes displayText {
    0% {
        display: inline-block;
    }

    33.33%,
    100% {
        display: none;
    }
}

h1 span::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    color: #01fe87;
    border-right: 4px solid #01fe87;
    filter: drop-shadow(0 0 5px #01fe87) drop-shadow(0 0 25px #01fe87);
    animation: animate 3s linear infinite;
}

@keyframes animate {

    0%,
    10%,
    100% {
        width: 0;
    }

    70% {
        width: 100%;
    }
}

.has-line::after {
    position: absolute;
    content: "";
    width: 200%;
    height: 1px;
    background-color: #ffffff;
    right: 250px;
    margin-right: 8px;
}

@media only screen and (max-width: 767px) {
    .has-line::after {
        margin-right: -14px;
    }
}

@media only screen and (max-width: 639px) {
    .has-line::after {
        margin-right: -38px;
    }
}

/* @media only screen and (max-height: 700px) {
    .main {
        margin-top: 10rem;
    }
} */
</style>