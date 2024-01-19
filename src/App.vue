<template>
  <Header />
  <full-page :options="options" id="fullpage" ref="fullpage">
    <Intro class="attachment-intro section" />
    <Specialization class="section bg-[#1b1b1b]" />
    <Experience class="attachment-experience section" />
    <TheBest class="acttachment-thebest section h-screen" />
    <MyWorks class="section h-screen bg-local bg-center" />
    <Partners class="section bg-[#1b1b1b]" />
    <TimeLine class="section h-screen" />
    <Inspire class="section h-screen bg-[#1b1b1b]" />
    <Contact class="acttachment-contact section h-screen" />
  </full-page>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue"
import Intro from "@/pages/Intro.vue"
import Specialization from "@/pages/Specialization.vue"
import Experience from "@/pages/Experience.vue"
import TheBest from "@/pages/TheBest.vue"
import MyWorks from "@/pages/MyWorks.vue"
import Partners from "@/pages/Partners.vue"
import TimeLine from "@/pages/TimeLine.vue"
import Inspire from "@/pages/Inspire.vue"
import Contact from "@/pages/Contact.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'App',
  components: {
    Header,
    Intro,
    Specialization,
    Experience,
    TheBest,
    MyWorks,
    Partners,
    TimeLine,
    Inspire,
    Contact,
    Footer
  },
  data: function () {
    return {
      options: {
        afterLoad: this.afterLoad,
        navigation: true,
      },
    }
  },
  methods: {
    afterLoad: function (origin, destination) {
      console.log("After load....");
      console.log(destination);
    },
    addSection: function () {
      var newSectionNumber = document.querySelectorAll('.fp-section').length + 1

      // creating the section div
      var section = document.createElement('div')
      section.className = 'section'
      section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`

      // adding section
      document.querySelector('#fullpage').appendChild(section)

      // creating the section menu element
      var sectionMenuItem = document.createElement('li')
      sectionMenuItem.setAttribute('data-menuanchor', 'page' + newSectionNumber)
      sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`

      // we have to call `update` manually as DOM changes won't fire updates
      // requires the use of the attribute ref="fullpage" on the
      // component element, in this case, <full-page>
      // ideally, use an ID element for that element too
      this.$refs.fullpage.build()
    },

    removeSection: function () {
      var sections = document.querySelector('#fullpage').querySelectorAll('.fp-section')
      var lastSection = sections[sections.length - 1]

      // removing the last section
      lastSection.parentNode.removeChild(lastSection)

      // removing the last anchor

      // removing the last item on the sections menu
      var sectionsMenuItems = document.querySelectorAll('#menu li')
      var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1]
      lastItem.parentNode.removeChild(lastItem)
    },
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #1d1d1d;
  /* padding: 32px 60px; */
  scroll-behavior: smooth;
}

.attachment-intro {
  background: url('@/assets/bg-intro2.png');
  background-size: cover;
  background-position: center;
}

.acttachment-contact {
  background: url('@/assets/attachment-03.jpg');
  background-size: cover;
  background-position: center;
}

.acttachment-thebest {
  background: url('@/assets/attachment-02.jpg');
  background-size: cover;
  background-position: center;
}

.attachment-experience {
  background: url('@/assets/attachment-04.jpg');
  background-size: cover;
  background-position: center;
}

#fp-nav ul li a.active span,
.fp-slidesNav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li:hover a.active span {
  height: 12px;
  width: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 100%;
  background: #be185d;
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  height: 4px;
  width: 4px;
  border: 0;
  background: white;
  left: 50%;
  top: 50%;
  margin: -2px 0 0 -2px;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

#fp-nav.fp-right {
  right: 60px;
}

.fp-overflow {
  outline: none;
  overflow-y: scroll;
}

.fp-overflow::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 1023px) {
  #fp-nav.fp-right {
    right: 3rem;
  }
}

@media only screen and (max-width: 767px) {
  #fp-nav.fp-right {
    right: 1.5rem;
  }
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  height: 8px;
  width: 8px;
  border: 0;
  background: white;
  left: 50%;
  top: 50%;
  margin: -4px 0 0 -4px;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

#fp-nav ul li:hover a span,
.fp-slidesNav ul li:hover a span {
  width: 8px;
  height: 8px;
  margin: -4px 0px 0px -4px;
}

#fp-nav ul li,
.fp-slidesNav ul li {
  display: block;
  width: 14px;
  height: 13px;
  margin: 24px 0;
  position: relative;
}

.fp-warning,
.fp-watermark {
  display: none !important;
}
</style>