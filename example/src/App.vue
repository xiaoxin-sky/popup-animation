<template>
  <div id="app">
    <div class="border">
      <h1>点击图片测试</h1>
      <img alt="Vue logo" src="./assets/logo.png" @click="test" />
      <span ref="logbtn">从我这里弹出来</span>
    </div>
    <div class="float border">
      <h1>点击按钮测试</h1>
      <button @click="btnClick">点击测试</button>
      <div class="block-red" ref="popupFrom"></div>
      <div class="float border">
        <h1>从自身弹出</h1>
        <button @click="btnClick1">点击从自身弹出</button>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  methods: {
    test() {
      this.popup(HelloWorld, {
        target: this.$refs.logbtn
        // transition: "0.3s ease-in",
      });
    },
    btnClick() {
      this.popup(HelloWorld, {
        target: this.$refs.popupFrom
        // transition: "0.3s ease-in",
      });
    },
    btnClick1(el) {
      this.popup(HelloWorld, {
        target: el.target
        // transition: "0.3s ease-in",
      });
    }
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.border{
  border:1px solid black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.float {
  float: right;
}
.block-red {
  width: 200px;
  height: 200px;
  background: red;
  margin-top: 200px;
}
</style>
