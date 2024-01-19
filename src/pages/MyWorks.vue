<script setup>
import { ref } from 'vue';
const backgrounds = [
    require('@/assets/attachment-06.jpg'),
    require('@/assets/attachment-07.jpg'),
    require('@/assets/attachment-10.jpg'),
    require('@/assets/attachment-11.jpg'),
]
const current = ref(0);

function changeBg(params) {
    current.value = params;
    const tests2 = document.querySelector('.testt');
    tests2.style.opacity = '0';
    tests2.style.transform = 'scale(1)';
    tests2.style.transition = '0.8s linear';

    const tests = document.querySelector('.testt');
    tests.style.opacity = '.6';
    tests.style.transform = 'scale(1.1)';
    tests.style.transition = '0.8s linear';
}
</script>
<template>
    <div class="h-screen relative top-0">
        <div class="ml-16 px-[60px] absolute h-screen top-[16px] 2xl:left-2 left-0 flex justify-center">
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
}" class="lg:block hidden font-semibold short:text-[6rem] text-[8rem]">
                my works
            </h1>
        </div>
        <div class="relative">
            <div class="img-bg flex justify-center items-center w-screen h-screen" style="">
                <img class="testt bg-effect absolute opacity-60 bg-cover bg-center h-full w-full"
                    :src="backgrounds[current]" alt="">
            </div>
            <section class=" absolute  top-0 z-20 flex justify-center w-full">
                <div class=" max-w-[1140px] mx-auto mt-44 short:mt-24 relative md:right-24 right-0">
                    <div @mouseenter="changeBg(0)" class=" active active-1 mb-8 short:mb-4 text-left w-full">
                        <div class="z-30 text-[#caccd1] flex justify-start ml-4 sm:ml-0 xl:justify-normal items-center">
                            <p class="xl:mr-56 lg:mr-32 md:mr-24 sm:mr-20 mr-6 text-lg">01</p>
                            <div>
                                <h1
                                    class="has-line short:mb-[-.5rem] lg:mb-0 mb-[-.5rem] relative test cursor-pointer font-montserrat font-semibold sm:text-[54px] text-[30px] lg:text-[66px] vshort:text-[30px] short:text-[40px] ">
                                    Abstract Skat</h1>
                                <p class="text-sm">Illustration</p>
                            </div>
                        </div>
                    </div>
                    <div @mouseenter="changeBg(1)" class=" active active-2 mb-8 short:mb-4 text-left  w-full">
                        <div class="z-30 text-[#caccd1] flex justify-start ml-4 sm:ml-0 xl:justify-normal items-center">
                            <p class="xl:mr-56 lg:mr-32 md:mr-24 sm:mr-20 mr-6 text-lg">02</p>
                            <div>
                                <h1
                                    class="has-line short:mb-[-.5rem] lg:mb-0 mb-[-.5rem] relative test cursor-pointer font-montserrat font-semibold sm:text-[54px] text-[30px] lg:text-[66px] vshort:text-[30px] short:text-[40px] ">
                                    Borato
                                    Prism</h1>
                                <p class="text-sm">Branding</p>
                            </div>
                        </div>
                    </div>
                    <div @mouseenter="changeBg(2)" class=" active active-3 mb-8 short:mb-4 text-left  w-full">
                        <div class="z-30 text-[#caccd1] flex justify-start ml-4 sm:ml-0 xl:justify-normal items-center">
                            <p class="xl:mr-56 lg:mr-32 md:mr-24 sm:mr-20 mr-6 text-lg">03</p>
                            <div class="w-full">
                                <h1
                                    class="has-line short:mb-[-.5rem] lg:mb-0 mb-[-.5rem] relative test cursor-pointer font-montserrat font-semibold sm:text-[54px] text-[30px] lg:text-[66px] vshort:text-[30px] short:text-[40px] ">
                                    Brole Mobile App
                                </h1>
                                <p class="text-sm">Mobile</p>
                            </div>
                        </div>
                    </div>
                    <div @mouseenter="changeBg(3)" class=" active active-4 text-left  w-full">
                        <div class="z-30 text-[#caccd1] flex justify-start ml-4 sm:ml-0 xl:justify-normal items-center">
                            <p class="xl:mr-56 lg:mr-32 md:mr-24 sm:mr-20 mr-6 text-lg">04</p>
                            <div>
                                <h1
                                    class="has-line short:mb-[-.5rem] lg:mb-0 mb-[-.5rem] relative test cursor-pointer font-montserrat font-semibold sm:text-[54px] text-[30px] lg:text-[66px] vshort:text-[30px] short:text-[40px] ">
                                    Bauhaus
                                    Studio</h1>
                                <p class="text-sm">Branding</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center mt-12 short:mt-6 mb-8">
                        <h1 class="font-montserrat has-line-one sm:ml-64 ml-12 text-lg relative">View all projects</h1>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>

<style scoped>
.has-line-one::after {
    position: absolute;
    top: calc(50% + 1px);
    content: "";
    width: 1000%;
    height: 1px;
    background-color: #ffffff;
    right: 130px;
    margin-right: 48px;
}

.active-1:hover .has-line::before,
.active-2:hover .has-line::before,
.active-3:hover .has-line::before,
.active-4:hover .has-line::before {
    width: 100%;
    transition: .5s linear;
}

.active-1 div,
.active-2 div,
.active-3 div,
.active-4 div {
    color: #caccd1;
    transition: .3s linear;
}

.active-1:hover div,
.active-2:hover div,
.active-3:hover div,
.active-4:hover div {
    color: white !important;
    transition: .3s linear;
}


.has-line::before {
    position: absolute;
    width: 0%;
    height: 1px;
    content: "";
    background: white;
    top: calc(50% + 1px);
}
</style>