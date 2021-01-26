<template>
  <div class="warp">
    <h1>测试弹出内容</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warp{
  background-color: red;
  width: 200px;
  height: 200px;
}
</style>
