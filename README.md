## 介绍

一个可以从任意位置弹出的 `vue` 命令式组件

## 使用

**组件内使用**

```js
import popup from "popup-animation";
popup({
  msg: "提示",
  target: el //需要弹出的位置元素
})
```

**全局使用**

```js
import Vue from "vue";
import popup from "./components/popup";
Vue.prototype.$pop = popup;
this.popup({
  msg: "提示",
  target: el
});
```

![示例图片](https://github.com/1912820899/popup-animation/blob/master/example.gif?raw=true)
