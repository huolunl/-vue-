<template>
  <div>
    <!--  v-module 等同于 value + input事件-->
    {{a}}<input type="text" v-model="a">
    <br>
    {{b}}<input type="text" :value="b" @input="handleInput">
  </div>

</template>

<script>
export default {
  name: "v",
  data() {
    return{
      a:'',
      b:''
    }
  },
  methods:{
    handleInput(e){
      this.b = e.target.value
    }
  }
}
</script>

<style scoped>

</style>
