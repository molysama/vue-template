<template lang="jade" >

#app 
  router-view 
  
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" >

// 微信自动放大字体解决办法
* 
  max-height 100000px
html {
  height 100%
  background-color #ececed
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// iconfont svg
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
}
</style>
