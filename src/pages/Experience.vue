<template>
    <div class=" overflow-y-scroll w-full">

        <section class="h-screen relative flex justify-center items-center pb-28">

            <div class="ml-8 px-[60px] absolute h-screen top-[16px] 2xl:left-10 left-0 flex justify-center">
                <h1 v-motion :initial="{
                    rotate: '-90deg',
                    letterSpacing: '.3em',
                    left: '-45px',
                    position: 'relative',
                    opacity: 0
                }" :visible="{
    opacity: 0.06,
    letterSpacing: '0.025em',
    left: '60px',
    position: 'relative',
    transition: {
        duration: 800,
    }
}" class="lg:block hidden font-semibold short:text-[6rem] text-[8rem] z-50">
                    resume
                </h1>
            </div>
            <div
                class="lg:pt-16 md:pt-32 short:pt-0 container max-w-[1140px] mx-auto lg:px-16 md:px-24 px-12 flex md:flex-row flex-col absolute top-28">
                <div class=" relative z-50 md:mr-8 mr-0 flex text-left h-full">
                    <div
                        class="hoverActive hover:bg-pink-700 lg:mt-8 sm:mt-[0] mt-0 bg-[rgba(255,255,255,.1)] lg:px-14 px-8 pb-14 relative">
                        <h3
                            class="absolute z-50 top-[-1.75rem] font-montserrat font-semibold lg:text-5xl md:text-[44px] sm:text-[40px] text-[30px]">
                            Education</h3>
                        <div class="mb-6 pb-6 border-b border-solid">
                            <h5
                                class="mt-16 uppercase font-medium tracking-widest font-montserrat lg:text-[16px] sm:text-sm text-[13px]">
                                Specialization
                                Course
                            </h5>
                            <div class="lg:text-sm sm:text-[13px] text-[12px] italic my-4">
                                <p class="mb-2">University of studies, Poland, Cracow</p>
                                <p>Jan 2004 - Dec 2006</p>
                            </div>
                            <p class="lg:text-sm sm:text-[13px] text-[12px] leading-7">Lorem ipsum dolor sit amet
                                consectetur adipisicing
                                elit.
                                Impedit ullam
                                vel
                                officiis! Minus corrupti
                                asperiores quod distinctio illo aspernatur itaque quidem, dignissimos cupiditate illum
                                pariatur
                                nesciunt mollitia eum natus! Beatae.</p>
                        </div>
                        <div class="">
                            <h5 class="mt-8 uppercase font-medium tracking-widest font-montserrat lg:text-[16px] text-sm">
                                Specialization
                                Course
                            </h5>
                            <div class="lg:text-sm text-[13px] italic my-4">
                                <p class="mb-2">University of studies, Poland, Cracow</p>
                                <p>Jan 2004 - Dec 2006</p>
                            </div>
                            <p class="lg:text-sm text-[13px] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Impedit ullam
                                vel
                                officiis! Minus corrupti
                                asperiores quod distinctio illo aspernatur itaque quidem, dignissimos cupiditate illum
                                pariatur
                                nesciunt mollitia eum natus! Beatae.</p>
                        </div>
                    </div>
                </div>
                <div class="hoverActive relative z-50 md:mt-24 mt-12 bottom-4 flex text-left">
                    <div class="hoverActive hover:bg-pink-700 bg-[rgba(255,255,255,.1)] lg:px-14 px-8 pb-14 relative">
                        <h3
                            class="absolute z-50 top-[-1.75rem] font-montserrat font-semibold lg:text-5xl md:text-[44px] text-[40px]">
                            Experience</h3>
                        <div class="mb-6 pb-6 border-b border-solid">
                            <h5 class="mt-16 uppercase font-medium tracking-widest font-montserrat lg:text-[16px] text-sm">
                                Specialization
                                Course
                            </h5>
                            <div class="lg:text-sm text-[13px] italic my-4">
                                <p class="mb-2">University of studies, Poland, Cracow</p>
                                <p>Jan 2004 - Dec 2006</p>
                            </div>
                            <p class="lg:text-sm text-[13px] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Impedit ullam
                                vel
                                officiis! Minus corrupti
                                asperiores quod distinctio illo aspernatur itaque quidem, dignissimos cupiditate illum
                                pariatur
                                nesciunt mollitia eum natus! Beatae.</p>
                        </div>
                        <div class="">
                            <h5 class="mt-8 uppercase font-medium tracking-widest font-montserrat lg:text-[16px] text-sm">
                                Specialization
                                Course
                            </h5>
                            <div class="lg:text-sm text-[13px] italic my-4">
                                <p class="mb-2">University of studies, Poland, Cracow</p>
                                <p>Jan 2004 - Dec 2006</p>
                            </div>
                            <p class="lg:text-sm text-[13px] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Impedit ullam
                                vel
                                officiis! Minus corrupti
                                asperiores quod distinctio illo aspernatur itaque quidem, dignissimos cupiditate illum
                                pariatur
                                nesciunt mollitia eum natus! Beatae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="test"></div>
    </div>
</template>

<style scoped>
.test {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(1, 1, 1, 0.4);
}

.hoverActive:hover .test::after {
    opacity: 0;
}
</style>