import Vue from 'vue';
import Popup from './Popup.vue';
// 获取目标元素的中心位置
function getTargetCenter(target) {
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
}

// 获取初始化弹出位置
function getInitPosition(options) {
  const { innerHeight, innerWidth } = window;
  // 初始化弹出位置，从中间弹出
  let positon = {
    x: innerWidth / 2,
    y: innerHeight / 2,
  };
  // 支持传目标元素或者自定义位置弹窗
  if (options.target) {
    positon = getTargetCenter(options.target);
  } else if (options.positon) {
    positon = options.positon;
  }
  return positon;
}

export default (options = {}) => {
  const ChildClass = Vue.extend();
  const position = getInitPosition(options);
  const pop = new ChildClass({
    render(h) {
      return h(
        Popup,
        {
          props: {
            position,
            showCloneBtn: options.showCloneBtn,
          },
        },
        [
          h(options.customComponent, {
            props: options.props,
            on: options.on,
          }),
        ],
      );
    },
  }).$mount();
  document.body.appendChild(pop.$el);
  return pop;
};
