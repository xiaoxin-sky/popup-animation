<template>
  <transition
    mode="out-in"
    :css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
  >
    <div v-if="show" class="popup">msg:{{ msg }}</div>
  </transition>
</template>

<script>
export default {
  name: "myPopup",
  mounted() {
    this.show = true;
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    beforeEnter(el) {
      const { x, y } = this.position;
      console.log(x, y);
      el.style.opacity = 0;
      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.transform = "translate(-50%,-50%) scale(0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const { innerHeight, innerWidth } = window;
      console.log(innerHeight, innerWidth);
      //初始化弹出位置，从中间弹出
      el.style.opacity = 1;
      el.style.left = innerWidth / 2 + "px";
      el.style.top = innerHeight / 2 + "px";
      el.style.transition = "0.6s cubic-bezier(.61,.59,.63,1.6)";
      el.style.transform = "translate(-50%,-50%) scale(1)";
      done();
      // el.addEventListener("transitionend", done);
    },
    getElementCenterPosition(target) {
      const {
        offsetWidth: elementWidth,
        offsetHeight: elementHeight,
        offsetLeft: x,
        offsetTop: y
      } = target;
      const centerX = x + elementWidth / 2;
      const centerY = y + elementHeight / 2;
      return {
        x: centerX,
        y: centerY
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  width: 200px;
  height: 200px;
  background-color: green;
}
.v-enter-active {
  transition-duration: 1s;
  transition-property: opacity;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
</style>
