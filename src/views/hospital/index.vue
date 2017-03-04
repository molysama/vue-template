
<template lang="jade">

.body 
  header
    .change
      div 南宁 
        icon(name="angle-down").change-icon
    .search
      icon(name="search").search-icon
      input(placeholder="搜索医院或医生", type="text")
  section
    .banner
      .img
      .info
    .category
      .item
        .icon 
        p 一键挂号
      .item
        .icon 
        p 查看报告
      .item
        .icon 
        p 我的医生
      .item
        .icon 
        p 健康档案


</template>
<script>
  
</script>
<style lang="stylus" scoped>
* 
  margin 0
  padding 0
  font-family "Ping Fang"
  font-weight 400
  font-size 0.3rem
header 
  width 100%
  height 0.8rem 
  line-height @height
  background #f9f9f9
  margin 0 auto
  display flex
  justify-content space-around
  align-items center
  .change 
    width 0.91rem 
    font-size 0.3rem 
    font-weight 500
    color #333333
  .search
    width 73.86%
    background #e4e5e7
    border-radius 0.09rem
    display flex 
    align-items center
    overflow hidden
    padding 0 0.2rem
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
section
  .banner 
    background #c8d3d9
    .img 
      width 100%
      height 4.21rem
      background #76a0ca
    .info 
      height 0.96rem
      width 100%
      background rgba(0, 0, 0, 0.25)
      position absolute
      margin-top -0.96rem
  .category
    width 100%
    height 2.1rem
    background #fff
    box-shadow -0.01rem 0.01rem 0 #dfdfdf
    display flex 
    align-items center
    justify-content space-around
    .item 
      width 1.1rem 
      height 1.26rem
      .icon 
        margin 0 auto
        width 0.8rem 
        height @width
        border-radius 50%
        background #74a3e8
      p 
        margin-top 0.2rem
        font-size 0.275rem
        font-weight 500
        color #404040
      
      

    

  
</style>