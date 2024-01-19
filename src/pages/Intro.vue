
<template>
    <div class="h-screen py-[32px]">
        <section class="main lg:px-[60px] px-[30px] sm:ml-8 ml-4 sm:mt-[17rem] mt-[15rem] short:mt-[10rem]">
            <div class="container mx-auto w-[1140px] md:pl-6 pl-0">
                <div class="flex flex-col items-start">
                    <h1
                        class="text-wrap text-left font-montserrat lg:text-[92px] md:text-[85px] text-[66px] lg:leading-[96px] md:leading-[86px] leading-[68px] font-semibold">
                        <span class="text-pink-700">Howdy,</span> <span class="block sm:inline">I'm</span>
                        <span class="block">LeToan</span>
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
            <div></div>
        </section>
    </div>
</template>

<style scoped>
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