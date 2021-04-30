export default {
  name: "render渲染",
  render(createElement) {
    return createElement(
        'h' + this.level,    //节点名字
        this.$slots.default   // 子节点数组， 上面节点内部的节点
    )
  },
  props:{
    level:{
      type: Number,
      required: true
    }
  }
}
