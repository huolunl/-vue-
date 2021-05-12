<template>
  <div>
    <span>{{p1}}</span>
  </div>
</template>

<script>
export default {
//  会向上级组件寻找p1，找到第一个就停止
  //业务开发可以优先考虑vuex提供全局唯一store， provide inject 会有一个类似冒泡的特性，数据源有可能在中间被”“打断”，甚至是有可能被组件库中的组件打断，或者打断组件库中的provide，不利于维护
name: "inject",
  inject: {
    p1:{
      from: "p1",
      default: "p2"
    }
  }
}
</script>

<style scoped>

</style>
