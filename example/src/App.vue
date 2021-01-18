<template>
  <div id="app">
    <div class="btn" @click="showPop"></div>
    <div class="btn1" @click="showPop"></div>
    <div class="btn2" @click="showPop"></div>
    <div class="btn3" @click="showPop"></div>
    <div class="btn4" @click="showPop"></div>
  </div>
</template>

<script>
/* import Vue from "vue";
import pop from "./components/popup";
Vue.prototype.$pop = pop; */
import popup from "../../lib/popup";
export default {
  name: "App",
  data() {
    return { showDv: false };
  },
  methods: {
    showPop(el) {
      console.log(el);
      /* this.$pop({
        msg: "提示",
        target: el.srcElement
      }); */
      popup({
        msg: "提示111",
        target: el.srcElement
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
body {
  margin: 0;
  padding: 0;
}
@mixin btn {
  width: 30px;
  height: 30px;
  position: absolute;
}
.btn {
  @include btn();
  left: 10px;
  top: 10px;
  background-color: red;
}
.btn1 {
  @include btn();
  background-color: hotpink;
  bottom: 10px;
  right: 10px;
}
.btn2 {
  @include btn();
  background-color: greenyellow;
  top: 10px;
  right: 10px;
}
.btn3 {
  @include btn();
  background-color: rgb(32, 150, 228);
  bottom: 10px;
  left: 10px;
}
.btn4 {
  @include btn();
  background-color: rgb(140, 32, 228);
  // bottom: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
