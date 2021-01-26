<template>
  <div>
    <HelloWorld :msg="msg" @click="clickTest" />
    <div ref="asd">asdas</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "popup-animation demo",
    };
  },
  methods: {
    clickTest() {
      /* Popup({
        customComponent: this.$refs.asd,
      }); */
      this.$popup({ customComponent: this.$refs.asd });
    },
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
</style>
