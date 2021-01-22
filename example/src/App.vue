<template>
  <div>
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
</style>
