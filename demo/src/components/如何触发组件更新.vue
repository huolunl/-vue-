<template>

</template>

<script>
export default {
  name: "如何触发组件更新",
  data(){
    //修改name不会触发组件更新
    this.name = 1
    return {
      // 修改age会触发组件更新
      age: 10
    }
  }
}
</script>

<style scoped>

</style>
