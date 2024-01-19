<template>
    <section>
        <div class="ml-16 px-[60px] absolute h-screen top-[16px] 2xl:left-20 left-0 flex justify-center">
            <h1 v-motion :initial="{
                rotate: '-90deg',
                letterSpacing: '.3em',
                left: '-160px',
                position: 'relative',
                opacity: 0
            }" :visible="{
    opacity: 0.06,
    letterSpacing: '0.025em',
    left: '0px',
    position: 'relative',
    transition: {
        duration: 800,
    }
}" class="lg:block hidden font-semibold text-[8rem]">
                learned
            </h1>
        </div>
        <div class="relative h-screen overflow-hidden max-w-[1140px] mx-auto w-full">
            <div class="absolute sm:top-48 top-24 w-full">
                <h1
                    class="xl:text-5xl sm:text-[44px] text-[30px] xl:ml-0 sm:ml-16 font-montserrat font-semibold lg:mb-20 mb-0 sm:text-left text-center">
                    <span class="text-pink-700">What</span> I
                    know ?
                </h1>
                <div
                    class="editer w-full grid lg:grid-cols-4 grid-rows-4 grid-cols-3 lg:gap-y-8 gap-y-2 lg:gap-x-16 gap-x-0">
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-18 w-14 h-auto" src="@/assets/my_learning/javascript.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">Javascript</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-18 w-14 h-auto" src="@/assets/my_learning/ts.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">Typescript</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-18 w-14 h-auto" src="@/assets/my_learning/vue.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">VueJS</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-18 w-14 h-auto" src="@/assets/my_learning/jquery.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">Jquery</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-24 w-20 h-auto" src="@/assets/my_learning/nodejs.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">NodeJS</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-18 w-14 h-auto" src="@/assets/my_learning/firebase.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">Firebase</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-24 w-20 h-auto" src="@/assets/my_learning/java.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">Java</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-24 w-20 h-auto" src="@/assets/my_learning/sass.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">SASS</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-18 w-14 h-auto" src="@/assets/my_learning/c.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">C</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-18 w-14 h-auto" src="@/assets/my_learning/c++.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">C++</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-18 w-14 h-auto" src="@/assets/my_learning/mongodb.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">MongoDB</p>
                    </div>
                    <div class="circle-hl relative flex flex-col justify-end items-center">
                        <img class="relative lg:w-28 w-24" src="@/assets/my_learning/expressjs.png" alt="">
                        <p class="relative font-montserrat lg:text-lg sm:text-base text-sm">ExpressJS</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.circle-hl::before {
    position: absolute;
    content: "";
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid rgba(145, 145, 145, 0.459);
    animation: led-light-effect 4s infinite;
}

@media only screen and (max-width: 350px) {
    .editer {
        grid-template-columns: 1fr 1fr;
    }

    .circle-hl p {
        display: none;
    }
}

@media only screen and (max-width: 640px) {
    .circle-hl::before {
        display: none;
    }
}

@keyframes led-light-effect {
    0% {
        border: 2px solid rgba(212, 212, 212, 0.384);
    }

    100% {
        border: 2px solid rgba(190, 190, 190, 0.527);
    }
}
</style>