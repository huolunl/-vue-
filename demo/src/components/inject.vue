<template>
  <div>
    <span>{{p1}}</span>
  </div>
</template>

<script>
export default {
//  会向上级组件寻找p1，找到第一个就停止
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
