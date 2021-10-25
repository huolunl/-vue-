<template>

</template>

<script>
// 作用  监听URL的变化并在变化前后执行相应的逻辑
// 不同的URL对应不同的组件
// 提供多种方式改变URL（url的改变不会刷新浏览器）

// 挂载到vue实例上后，只需提供一个占位，来展示url匹配到的组件即可

// 使用history模式可以消除#
// mode:history
export default {
  name: "router"
}
</script>

<style scoped>

</style>
