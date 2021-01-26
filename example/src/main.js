import Vue from "vue";
import App from "./App.vue";
import Pupup from "../../lib/popup.js";
Vue.use(Pupup);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
