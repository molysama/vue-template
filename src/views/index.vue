
<template lang="jade">

.body 
  header
    div header
  .container
    .item box
    .item box
    .item box
    .item box
    .item box
    .item box
    .item box
    .item box
    .item box
  footer
    div footer

</template>
<script>
  
</script>
<style lang="stylus" scoped>

.body 
    padding 1rem 0
    display flex 
    flex-flow column nowrap
  header, footer 
    display block
    width 100%
    height 1rem
    position fixed
    flex-grow 0
  header 
    top 0
  footer 
    bottom 0
  .container
    display flex
    flex-flow row wrap
    justify-content center
    flex-grow 1
    align-items center
  
.item 
  border 1px solid #666
  width 33%
  height @width
  display block
  color #666
  text-align center
  
</style>