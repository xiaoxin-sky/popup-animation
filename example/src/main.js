import Vue from "vue";
import App from "./App.vue";
import Pupup from "popup-animation";
Vue.use(Pupup);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
