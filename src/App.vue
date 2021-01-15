<template>
  <div id="app">
    <div ref="btn" class="btn" @click="showPopup"></div>
    <div ref="btn1" class="btn1" @click="showPopup1"></div>
    <div ref="btn2" class="btn2" @click="showPopup2"></div>
    <div ref="btn3" class="btn3" @click="showPopup3"></div>
    <div ref="btn4" class="btn4" @click="showPopup4"></div>
  </div>
</template>

<script>
import Vue from "vue";
import pop from "./components/popup";
Vue.prototype.$pop = pop;
export default {
  name: "App",
  data() {
    return { showDv: false };
  },
  methods: {
    showPop(el) {
      console.log(el);
      this.$pop({
        msg: "提示",
        target: el.srcElement
      });
    },
    showPopup() {
      this.$pop({
        msg: "提示",
        target: this.$refs.btn
      });
    },
    showPopup1() {
      this.$pop({
        msg: "提示",
        target: this.$refs.btn1
      });
    },
    showPopup2() {
      this.$pop({
        msg: "提示",
        target: this.$refs.btn2
      });
    },
    showPopup3() {
      this.$pop({
        msg: "提示",
        target: this.$refs.btn3
      });
    },
    showPopup4() {
      this.$pop({
        msg: "提示",
        target: this.$refs.btn4
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
