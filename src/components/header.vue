
<template lang="jade">

.header
  img(src="../assets/list.png").logo 
  .text BLOCKS
  img(src="../assets/icon.png").icon

</template>
<script>
  
</script>
<style lang="stylus" scoped>
.header 
  box-sizing border-box
  position absolute
  width 100%
  margin-top 0.79rem
  padding 0 0.4rem
  height 0.42rem 
  line-height @height
  display flex
  flex-flow row nowrap
  justify-content space-between
  .logo, .text, .icon
    font-size 0.3rem
    color #fff
  .icon, .logo
    height 0.42rem
  
</style>