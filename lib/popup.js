import Vue from "vue";
import Popup from "./Popup.vue";
export default (options = {}) => {
  const Pop = Vue.extend(Popup);
  console.log(options.msg);
  const instance = new Pop({
    // el: document.createElement("div"),
    data() {
      return {
        msg: options.msg,
        position: getInitPosition(options)
      };
    },
    components: {
      customComponent: options.customComponent
    }
  }).$mount();
  // console.log(instance);
  document.body.appendChild(instance.$el);
  window.setTimeout(
    () => {
      instance.$data.show = false;
    },
    options.time ? options.time : 1000
  );
};

//获取初始化弹出位置
function getInitPosition(options) {
  const { innerHeight, innerWidth } = window;
  //初始化弹出位置，从中间弹出
  let positon = {
    x: innerWidth / 2,
    y: innerHeight / 2
  };
  //支持传目标元素或者自定义位置弹窗
  if (options.target) {
    positon = getTargetCenter(options.target);
  } else if (options.positon) {
    positon = options.positon;
  }
  return positon;
}
//获取目标元素的中心位置
function getTargetCenter(target) {
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
