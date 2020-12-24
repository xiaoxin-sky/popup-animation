<template>
  <div id="app">
    <div ref="btn" class="btn" @click="showPopup"></div>
    <div ref="btn1" class="btn1" @click="showPopup1"></div>
  </div>
</template>

<script>
import Vue from "vue";
import pop from "./components/popup";
Vue.prototype.$pop = pop;
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    showPopup() {
      this.$pop({
        msg: "djdj",
        target: this.$refs.btn
      });
    },
    showPopup1() {
      this.$pop({
        msg: "djdj",
        target: this.$refs.btn1
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
</style>
