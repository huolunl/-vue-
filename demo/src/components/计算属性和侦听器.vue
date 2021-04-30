<template>
  <div>
    a: {{age}}
    <br>
    b: {{doubleAge}}


    <button @click="w.s+=1">ws+1</button>

<!--    不会处罚，因为w 没有深度监听， w.x 也没有被监听-->
    <button @click="w.x+=1">wx+1</button>

    <button @click="d.s+=1">ds+1</button>
    <button @click="d.x+=1">dx+1</button>
  </div>
</template>

<script>

// tip 能用 computed 就不用watch
// 计算属性必须依赖响应式数据， 也就是data返回的数据， 有自己的缓存
// watch 监听的属性变化了，就执行对应的流程， 有普通监听， 深度监听

export default {
  name: "计算属性和侦听器",
  data(){
    return {
      age :1,
      w: {
        s:2,
        x:3
      },
      d: {
        s:2,
        x:3
      }
    }
  },
  computed:{
      doubleAge() {
        return 2 * this.age
      }
  },
  watch: {
    w(){
      alert(1)
    },
    "w.s":function (){
      alert(2)
    },
    d:{
      deep: true,
      handler: function (){
        alert(3)
      }
    }

  }

}
</script>

<style scoped>

</style>
