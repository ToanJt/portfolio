<template>
    <div class="">
        <div class="ml-16 px-[60px] absolute h-screen top-[16px] 2xl:left-2 left-[80px] flex justify-center">
            <h1 v-motion :initial="{
                rotate: '-90deg',
                letterSpacing: '.3em',
                left: '-40px',
                position: 'relative',
                opacity: 0
            }" :visible="{
    opacity: 0.06,
    letterSpacing: '0.025em',
    left: '80px',
    position: 'relative',
    transition: {
        duration: 800,
    }
}" class="lg:block hidden font-semibold text-[8rem]">
                contact
            </h1>
        </div>
        <section class="relative h-screen">
            <div
                class="max-w-[1140px] w-full mx-auto relative md:top-60 sm:top-36 top-28 flex md:flex-row flex-col xl:justify-between md:justify-center md:items-start items-center">
                <div class="xl:mr-0 md:mr-8 text-left xl:w-full lg:w-[40%] md:w-[35%] w-[80%] font-montserrat">
                    <h3 class="xl:text-5xl md:text-[44px] text-[30px] font-semibold md:mb-8 mb-2"><span
                            class="text-pink-700">Hue
                            City,</span>
                        Vietnam
                    </h3>
                    <h6 class="text-[#999999] xl:text-[22px] md:text-[20px] text-[19px]">Thuy Duong, Huong Thuy, Hue City
                    </h6>
                    <div class="z-50 xl:text-xl md:text-[18px] text-[17px] md:mt-16 mt-8 md:mb-0 mb-8">
                        <p class="md:mb-4 mb-2">lexuantoan5703@gmail.com</p>
                        <p>+84 123-952-213</p>
                    </div>
                </div>
                <div class="xl:ml-0 md:ml-8 text-left xl:w-full lg:w-[40%] md:w-[35%] w-[80%]">
                    <form class="" action="">
                        <div class="flex sm:flex-row flex-col sm:mb-8 mb-6 justify-between">
                            <input placeholder="Name" class="w-full mr-8 px-4 xl:py-[10px] sm:mb-0 mb-6" type="text">
                            <input placeholder="Email" class="w-full px-3 py-[10px]" type="email">
                        </div>
                        <div class="sm:mb-8 mb-6">
                            <input placeholder="Subject (Optional)" class="w-full px-3 py-[10px]" type="text">
                        </div>
                        <textarea placeholder="Message" class="w-full" name="" id="" cols="30" rows="8"></textarea>
                        <button
                            class="hover:bg-pink-600 cursor-pointer xl:text-sm text-[12px] sm:mt-8 mt-6 bg-pink-700 xl:px-8 px-6 xl:py-[14px] py-[12px] sm:mb-0 mb-16 short:mb-16">Contact
                            Me</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
input {
    height: 48px;
}


input,
textarea {
    font-size: 14px;
    background: #2f2f2f;
    outline: none;
    padding: 12px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

@media only screen and (max-width: 1280px) {
    input {
        height: 44px;
    }

    input,
    textarea {
        font-size: 13px;
    }
}

input::placeholder,
textarea::placeholder {
    font-weight: 300;
}

button {
    transition: .3s linear;
}

button:hover {
    transition: .3s linear;
}
</style>