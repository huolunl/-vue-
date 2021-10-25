<template>
  <div>
    {{count}}
    <button @click="$store.commit('increment',2)">count++</button>
    <button @click="$store.dispatch('increment',2)">sync count++</button>
    <span>getter{{$store.getters.d}}</span>
  </div>
</template>

<script>
// vuex 可以作为一个全局变量，组件间共用
export default {
  name: "vuex",
  computed: {
    // 使用vuex时需要用计算属性视图才会刷新
    count(){
      return this.$store.state.count
    }
  }
}
</script>

<style scoped>

</style>
