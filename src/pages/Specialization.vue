<template>
    <div class=" overflow-y-scroll w-full">
        <div class="ml-16 px-[60px] absolute h-screen top-[16px] 2xl:left-10 left-0 flex justify-center">
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
                what i do
            </h1>
        </div>
        <section
            class="md:pl-24 pl-12 block h-screen relative container mx-auto max-w-[1140px] md:pt-56 short:pt-28 pt-48 text-left">
            <div class="pb-20">
                <h3 class="font-montserrat md:text-5xl sm:text-[2.5rem] text-[2rem] font-semibold"><span
                        class=" text-pink-700">My</span>
                    specialization
                </h3>
            </div>
            <div class="md:flex block w-full">
                <div class="md:w-[33.33333%] md:mb-0 mb-10 w-full block text-left">
                    <svg class="md:size-[70px] size-[60px] md:mb-8 mb-4 text-pink-700" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
                        viewBox="0 0 20 20">
                        <path fill="currentColor"
                            d="M11.5 14h-8c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h13c0.827 0 1.5 0.673 1.5 1.5v1c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5h-13c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z">
                        </path>
                        <path fill="currentColor"
                            d="M11.5 18h-10c-0.827 0-1.5-0.673-1.5-1.5v-1c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-10.5v0.5c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z">
                        </path>
                        <path fill="currentColor"
                            d="M18.5 18h-4c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5v8c0 0.827-0.673 1.5-1.5 1.5zM14.5 8c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5h-4z">
                        </path>
                        <path fill="currentColor"
                            d="M16.5 16c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z">
                        </path>
                    </svg>
                    <h3 class="md:mb-8 mb-4 uppercase font-montserrat font-semibold lg:text-[22px] text-[20px]">Web design
                    </h3>
                    <p
                        class="sm:w-[90%] w-full lg:text-[15px] sm:text-[14px] text-[13px] pr-8 text-light-dark-gray font-medium leading-6">
                        Working with
                        client and community, we
                        deliver
                        masterplans that
                        create vibrant new
                        places and spaces,
                        attract people, and encourage investment through.</p>
                </div>
                <div class="md:w-[33.33333%] md:mb-0 mb-10 w-full block text-left">
                    <svg class="md:size-[70px] size-[60px]  md:mb-8 mb-4 text-pink-700" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                        <path
                            d="M13.5 16h-7c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v0.5h6v-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
                            fill="currentColor"></path>
                        <path
                            d="M13.5 5c-0.276 0-0.5-0.224-0.5-0.5v-1.5h-6v1.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
                            fill="currentColor"></path>
                        <path
                            d="M10.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
                            fill="currentColor"></path>
                        <path
                            d="M14.5 20h-9c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.827-0.673 1.5-1.5 1.5z"
                            fill="currentColor"></path>
                        <path
                            d="M15.5 5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-9c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3c0-0.827 0.673-1.5 1.5-1.5h9c0.827 0 1.5 0.673 1.5 1.5v3c0 0.276-0.224 0.5-0.5 0.5z"
                            fill="currentColor"></path>
                        <path
                            d="M6 13c-0.128 0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512 0-0.707l3-3c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2.646 2.646 2.646 2.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
                            fill="currentColor"></path>
                        <path
                            d="M14 13c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2.646-2.646-2.646-2.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l3 3c0.195 0.195 0.195 0.512 0 0.707l-3 3c-0.098 0.098-0.226 0.146-0.354 0.146z"
                            fill="currentColor"></path>
                        <path
                            d="M8.5 13c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l3-6c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-3 6c-0.088 0.175-0.264 0.277-0.448 0.277z"
                            fill="currentColor"></path>
                    </svg>
                    <h3 class="md:mb-8 mb-4  uppercase font-montserrat font-semibold lg:text-[22px] text-[20px]">Mobile
                        Coding</h3>
                    <p
                        class="sm:w-[90%] w-full lg:text-[15px] sm:text-[14px] text-[13px] pr-8 text-light-dark-gray font-medium leading-6">
                        Working with client and community, we deliver masterplans that create vibrant new places and spaces,
                        attract people, and encourage investment through.</p>
                </div>
                <div class="md:w-[33.33333%] md:mb-0 mb-10 w-full block text-left">
                    <svg class="md:size-[70px] size-[60px] md:mb-8 mb-4 text-pink-700" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
                        viewBox="0 0 20 20">
                        <path fill="currentColor"
                            d="M18.9 7.2l-3-4c-0.077-0.103-0.191-0.172-0.318-0.193l-6-1c-0.054-0.009-0.11-0.009-0.164 0l-6 1c-0.127 0.021-0.241 0.090-0.318 0.193l-3 4c-0.143 0.191-0.131 0.457 0.028 0.634l9 10c0.095 0.105 0.23 0.166 0.372 0.166s0.277-0.060 0.372-0.166l9-10c0.16-0.178 0.172-0.443 0.028-0.634zM12.786 7l-3.286 9.037-3.286-9.037h6.572zM6.707 6l2.793-2.793 2.793 2.793h-5.586zM10.957 3.25l3.698 0.616-1.233 1.849-2.466-2.465zM5.578 5.715l-1.233-1.849 3.698-0.616-2.465 2.465zM4.67 6.156l-2.985 0.597 1.791-2.388 1.194 1.791zM5.177 7.075l2.974 8.179-6.692-7.436 3.718-0.744zM13.823 7.075l3.718 0.744-6.692 7.436 2.974-8.179zM14.33 6.156l1.194-1.791 1.791 2.388-2.985-0.597z">
                        </path>
                    </svg>
                    <h3 class="md:mb-8 mb-4  uppercase font-montserrat font-semibold lg:text-[22px] text-[20px]">
                        ILLUSTRATION</h3>
                    <p
                        class="sm:w-[90%] w-full lg:text-[15px] sm:text-[14px] text-[13px] pr-8  text-light-dark-gray font-medium leading-6">
                        Working with client and community, we deliver masterplans that create vibrant new places and spaces,
                        attract people, and encourage investment through.</p>
                </div>
            </div>
            <div class="has-line mt-12 pb-[60px] relative flex items-center">
                <p class="font-montserrat text-lg">Download Resume</p>
            </div>
        </section>
    </div>
</template>

<style scoped>
.has-line::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    right: calc(100% + 8px);
    margin-right: 16px;
}
</style>