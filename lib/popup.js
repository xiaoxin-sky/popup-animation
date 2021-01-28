import Popup from "./Popup.vue";
import { close } from "./util";
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
/* 
  options{
    target：点击目标元素，从目标元素中弹出
    positon：自定义弹出位置，如果 target存在，则首先从target 中获取数据
    transition:自定义弹出动画和时间
    showCloneBtn:是否显示关闭按钮
    props：弹出组件中需要的自定义属性对象
    on：弹出组件自定义事件监听对象
  }
*/
function pupup(Vue, component, options) {
  const ChildClass = Vue.extend();
  const position = getInitPosition(options);
  const pop = new ChildClass({
    render(h) {
      return h(
        Popup,
        {
          props: {
            position,
            transition: options.transition,
            isClose: options.isClose,
          },
        },
        [
          h(component, {
            props: options.props,
            on: options.on,
          }),
        ]
      );
    },
  }).$mount();
  pop.close = close;
  document.body.appendChild(pop.$el);
  return pop;
}
export { pupup };
export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$popup", {
      value: (component, options) => {
        return pupup(Vue, component, options);
      },
    });
  },
};
