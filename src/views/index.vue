
<template lang="jade">

.body 
  m-header
  .main
    .content
      input(placeholder="Full Name", v-model="user.name")
      input(placeholder="Last Name", v-model="user.age")
      input(placeholder="Password")
      input(placeholder="Confirm Password")
    .iconwrap
      .item f
      .item t
      .item g+
  .base
    span.title Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementu.
    button(@click="$router.push('/mint-tarbar')") 开始


</template>
<script>

import { mapGetters } from 'vuex'
import * as types from '../store/types' 

export default {
  computed: {
    ...mapGetters({
      user: types.getUserInfo
    })
  }

}
  
</script>
<style lang="stylus" scoped>

* 
  margin 0
  padding 0

html
  height 100%
.body 
  margin 0 auto
  .main 
    width 100%
    background-color: #595f6f
    overflow hidden
    .content 
      margin 0 auto
      margin-top 2.55rem
      width 81.3%
      height 4.6rem
      display flex 
      flex-flow column nowrap
      justify-content space-between
      input 
        border-radius 0.02rem 
        border 0.02rem solid #fff 
        background-color rgba(252, 252, 252, 0.3)
        height 1rem
        font-size 0.3rem 
        font-weight 400
        color #fff
        padding-left 0.46rem
        &::placeholder
          font-size 0.3rem 
          font-weight 400
          color #fff
    .iconwrap 
      height 1.1rem 
      line-height @height
      width 54.666%
      margin 0 auto
      margin-top 0.96rem
      margin-bottom 0.83rem
      display flex
      justify-content space-between
      .item 
        height @height 
        line-height @height
        width @height 
        border-radius 50%
        border 0.02rem solid #cbced5
        font-size 0.4rem
        font-weight 400
        color #cbced5
  .base 
    width 100%
    height 3.3rem 
    background #ececed
    overflow hidden
    .title 
      margin 0 auto
      display block
      width 63.4666%
      color #595f6f 
      font-size 0.26rem 
      font-weight 400
      line-height 0.3rem
      position relative
      top 0.55rem 
    button 
      width 81.333%
      height 1rem 
      border-radius 0.04rem 
      background-color #f56e4e
      border none
      position relative
      top 0.5rem
      font-size 0.3rem 
      color #fff 
      font-weight 400
      text-transform uppercase
      line-height 0.4rem

      


        


</style>