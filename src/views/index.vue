
<template lang="jade">

div
  h2 从上到下
  .box(flex)
    .item(flex-box="0") 1
    .item(flex-box="1") 2
    .item(flex-box="0") 3

</template>
<script>

import flex from 'flex.css'
  
</script>
<style lang="stylus" scoped>

.box 
  border 0.01rem solid #ddd
  
.item 
  // width 0.3rem 
  // height 0.3rem 
  // line-height 0.3rem 
  width 1rem 
  height 1rem 
  line-height 1rem
  color #666
  text-align center
  
</style>