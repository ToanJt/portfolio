import { createApp } from "vue";
import App from "./App.vue";
import Style from "@/main.css";
import { MotionPlugin } from "@vueuse/motion";
const FullPage = require("vue-fullpage.js");

const app = createApp(App);
app.use(Style);
app.use(MotionPlugin);
app.use(FullPage);
app.mount("#app");
