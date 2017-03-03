
<template lang="jade">

.body 
  header
    .change
      div 南宁 
        icon(name="angle-down").change-icon
    .search
      icon(name="search").search-icon
      input(placeholder="搜索医院或医生", type="text")


</template>
<script>
  
</script>
<style lang="stylus" scoped>
* 
  margin 0
  padding 0
  font-family "Ping Fang"
header 
  width 100%
  height 1.28rem 
  line-height @height
  background #f9f9f9
  margin 0 auto
  display flex
  justify-content space-around
  align-items center
  .change 
    font-size 0.3rem 
    font-weight 500
    color #333333
  .search
    width 73.86%
    background #e4e5e7
    border-radius 0.09rem
    display flex 
    align-items center
    .search-icon
      margin-left 0.2rem
    input 
      background @background
      border none
      height 0.5rem
      line-height @height
      width 100%
      margin-left 0.14rem
      padding-left 0.1rem
      color #a7a7a7
      font-size 0.24rem 
      font-weight 500
      &:focus 
        outline none
      

    

  
</style>