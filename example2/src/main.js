import { createApp } from "vue";
import App from "./App.vue";
import Popup from "../../lib/popupAminmation/popup.js";

const app = createApp(App);
app.use(Popup);
app.mount("#app");
