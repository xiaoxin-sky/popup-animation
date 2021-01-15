<template>
  <div>
    <button v-on:click="showDv = !showDv">
      Toggle
    </button>
    <transition
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="transitionDemo" v-show="showDv"></div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.style.transition = "0.6s cubic-bezier(.61,.59,.63,1.6)";
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.opacity = 1;
      el.style.backgroundColor = "green";
      el.addEventListener("transitionend", done);
    },
    beforeLeave(el) {
      el.style.transition = "6s cubic-bezier(.61,.59,.63,1.6)";
      el.style.display = "block";
    },
    leave(el, done) {
      el.style.opacity = 0;
      el.style.backgroundColor = "yellow";
      el.addEventListener("transitionend", done);
    }
  }
};
</script>

<style>
.transitionDemo {
  width: 200px;
  height: 200px;
  background-color: rgb(41, 236, 41);
}
</style>
