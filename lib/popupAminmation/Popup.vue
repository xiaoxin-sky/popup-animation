<template>
  <div>
    <transition
      mode="out-in"
      :css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <div v-if="show" class="popup">
        <!-- <custom-component @close="show = false" /> -->
        <slot></slot>
        <div class="close" @click="close" v-if="showCloneBtn"></div>
      </div>
    </transition>
    <div class="mask" v-if="show" @touchmove.prevent></div>
  </div>
</template>

<script>
export default {
  name: "myPopup",
  props: {
    position: {
      type: Object,
    },
    showCloneBtn: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.show = true;
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    beforeEnter(el) {
      const { x, y } = this.position;
      el.style.opacity = 0;
      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.transform = "translate(-50%,-50%) scale(0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const { innerHeight, innerWidth } = window;
      // 初始化弹出位置，从中间弹出
      el.style.opacity = 1;
      el.style.left = innerWidth / 2 + "px";
      el.style.top = innerHeight / 2 + "px";
      // el.style.transition = '0.3s cubic-bezier(.61,.59,.63,1.6)';
      el.style.transition = "0.3s ease-in";
      el.style.transform = "translate(-50%,-50%) scale(1)";
      el.addEventListener("transitionend", done);
    },
    getElementCenterPosition(target) {
      const {
        offsetWidth: elementWidth,
        offsetHeight: elementHeight,
        offsetLeft: x,
        offsetTop: y,
      } = target;
      const centerX = x + elementWidth / 2;
      const centerY = y + elementHeight / 2;
      return {
        x: centerX,
        y: centerY,
      };
    },
    // 按钮关闭点击事件
    close() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.popup {
  z-index: 10000;
  position: fixed;
}
.close {
  content: "";
  /* background: url('~@/assets/images/home/popup/guanbi.png') no-repeat; */
  background-size: 32px;
  width: 32px;
  height: 33px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.mask {
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
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
