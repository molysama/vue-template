
<template lang="jade">

.body
  .page-wrap
    .page-title tabbar
    div 
      mt-cell(class="page-part", title="当前选中", :value="selected")
    mt-tab-container(class="page-tabbar-container", v-model="selected")
      mt-tab-container-item(id="外卖")
        mt-cell(v-for="n in 10", :title="'外卖' + n", @click.native="consoleThis($event)")
      mt-tab-container-item(id="订单")
        mt-cell(v-for="n in 5", :title="'订单' + n")
      mt-tab-container-item(id="发现")
        mt-cell(v-for="n in 7", :title="'发现' + n")
      mt-tab-container-item(id="我的")
        .page-part
          mt-cell(v-for="n in 12", :title="'我的' + n")
        router-link(to="/")
          mt-button(type="danger", size="large") 退出
  mt-tabbar(v-model="selected", fixed).tabbar
    mt-tab-item(id="外卖")
      icon(slot="icon", name="bandcamp")
      |外卖
    mt-tab-item(id="订单")
      icon(slot="icon", name="window-maximize")
      |订单
    mt-tab-item(id="发现")
      icon(slot="icon", name="search")
      |发现
    mt-tab-item(id="我的")
      icon(slot="icon", name="user-o")
      |我的

</template>
<script>

export default {
  name: 'page-tabbar',
  data () {
    return {
      selected: '外卖'
    }
  },
  methods: {
    consoleThis ($event) {
      alert($event.target.innerText)
    }
  }
}

  
</script>
<style lang="stylus" scoped>

.body 
  height 100vh 
  overflow hidden 
  .page-wrap 
    overflow hidden 
    height 100%
    padding-bottom 1rem
  .is-selected
    background inherit!important
    // border-top 0.01rem solid #26a2ff
    // border-color #26a2ff
  
.tabbar 
  svg 
    display block
  
  
</style>