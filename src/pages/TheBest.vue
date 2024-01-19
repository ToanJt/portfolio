<template>
    <section class="h-screen relative z-20">
        <div class="ml-16 px-[60px] absolute h-screen top-[16px] 2xl:left-6 left-0 flex justify-center">
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
                about me
            </h1>
        </div>
        <div
            class="max-w-[1140px] short:h-screen md:h-full h-screen mx-auto sm:px-16 px-8 lg:pt-56 pt-40 short:pt-36 flex md:flex-row flex-col justify-center">
            <div
                class="relative short:h-[50%] xl:w-[50%] md:w-[50%] sm:w-[50%] w-full 2xl:mr-36 lg:mr-20 sm:mr-14 mr-0 lg:mb-0 md:mb-48 mb-8 md:mt-0 sm:mt-72 mt-60 md:px-12 px-8 short:px-6 py-4 short:py-0 border-solid border-white border">
                <h1 class="lg:text-[324px] sm:text-[300px] text-[200px] short:text-[240px] leading-none">3</h1>
                <div class="flex flex-col justify-center absolute left-4 right-4 bottom-0">
                    <div class=" has-line absolute sm:w-20 w-10 h-[1px] bg-white"></div>
                    <ul class="md:pb-16 pb-2 lg:text-lg md:text-base sm:text-sm text-[12px] text-right">
                        <li>Years</li>
                        <li>Experience</li>
                        <li>Working</li>
                    </ul>
                </div>
            </div>
            <div class="text-left short:mb-8 relative right-0">
                <h1
                    class="font-montserrat font-semibold short:mb-4 lg:text-5xl md:text-[44px] text-[36px] md:mb-8 mb-2 2xl:w-full w-[90%]">
                    <span class="text-pink-700">The
                        best</span> websites
                </h1>
                <p class="short:mb-4 mb-8 lg:text-sm text-[13px] font-normal leading-7 text-[#888888] 2xl:w-full w-[90%]">
                    From tree
                    make green
                    multiply, great greater
                    is.
                    Fruit fowl
                    blessed. Unto of
                    man greater
                    spirit you’ll
                    beginning.</p>
                <div>
                    <div class="mb-8 short:mb-4 2xl:w-full w-[90%]">
                        <div class="flex justify-between">
                            <p class="lg:text-sm text-[13px] mb-3 short:mb-1">Mobile</p>
                            <p class="lg:text-sm text-[13px]">80%</p>
                        </div>
                        <div class="bg-[#222222] w-full sm:h-10 h-9">
                            <div v-motion :initial="{
                                width: '0%'
                            }" :visible="{
    width: '80%',
    transition: {
        duration: 800
    }
}" class="bg-pink-700 w-[0%] sm:h-10 h-9"></div>
                        </div>
                    </div>
                    <div class="mb-8 short:mb-4 2xl:w-full w-[90%]">
                        <div class="flex justify-between">
                            <p class="lg:text-sm text-[13px] mb-3 short:mb-1">Coding</p>
                            <p class="lg:text-sm text-[13px]">70%</p>
                        </div>
                        <div class="bg-[#222222] w-full sm:h-10 h-9">
                            <div v-motion :initial="{
                                width: '0%'
                            }" :visible="{
    width: '70%',
    transition: {
        duration: 800
    }
}" class="bg-pink-700 w-[0%] sm:h-10 h-9"></div>
                        </div>
                    </div>
                    <div class="md:mb-8 mb-20 2xl:w-full w-[90%]">
                        <div class="flex justify-between">
                            <p class="lg:text-sm text-[13px] mb-3 short:mb-1">Illustration</p>
                            <p class="lg:text-sm text-[13px]">90%</p>
                        </div>
                        <div class="bg-[#222222] w-full sm:h-10 h-9">
                            <div v-motion :initial="{
                                width: '0%'
                            }" :visible="{
    width: '90%',
    transition: {
        duration: 800
    }
}" class="bg-pink-700 w-[0%] sm:h-10 h-9 sm:mb-0 mb-16"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>