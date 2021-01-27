# popup-animation 组件使用

### 安装

```bash
$npm install popup-animation -S
```

1. 全局安装插件

   ```js
   // 在 vue 入口函数中安装插件
   import Vue from 'vue';
   import Popup from 'popup-animation';
   Vue.use(Popup);
   ```

   

2. 单个组件中使用

   ```js
   import { popup } from 'popup-animation';
   popup(component,options);
   ```

### 使用

```js
this.popup(component,options);
```

### 参数

1. component 

   > 需要弹出的组件

2. options

   | key        | Description                                                | Require | default                            |
   | ---------- | ---------------------------------------------------------- | ------- | ---------------------------------- |
   | positon    | 自定义弹出位置，如果 target存在，则首先从target 中获取数据 | —       |                                    |
   | props      | 弹出组件中自定义属性对象                                   | —       | {}                                 |
   | on         | 弹出组件自定义事件监听对象                                 | —       | {}                                 |
   | target     | 从目标元素中弹出                                           | —       | {}                                 |
   | isClose    | 是否可以通过点击遮罩层关闭弹窗                             | —       | True                               |
   | transition | 自定义弹出动画和时间                                       | —       | 0.3s cubic-bezier(.61,.59,.63,1.6) |

### 返回值

> popup 实例，⚠️注意：popup实例并非是传入的自组件实例

### popup 实例方法

| name  | Description | ruturn |
| ----- | ----------- | ------ |
| close | 关闭弹窗    | 无     |

### 例子

```vue
<templete>
	<button @click="test">
    测试
  </button>
  <h1 ref="h1">
    我是被弹出的组件
  </h1>
</templete>
<script>
	export default {
    methods:{
      test(el){
        this.popup(this.$refs.h1);
      }
    }
  }
</script>
```

### 注意事项：

1. 弹出层和app不属于同一个 上下文，目前版本，请不要在弹出层中使用 this.$router，this.$store等，如有需要，请使用eventBus