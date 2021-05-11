<template>
  <div>
    <inject></inject>
  </div>
</template>

<script>
import inject from "@/components/inject"
export default {
  name: "provideInject",
  components:{
    inject
  },
  provide: {
    p1: "p1"
  }
}
</script>

<style scoped>

</style>
