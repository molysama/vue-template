
<template lang="jade">

.body
  m-header
  .main
    input(type="text", placeholder="随便写一个", v-model="input")
    .button(@click.prevent="login") 登录
  .base 
    .title
      span Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. 
    .pagination
      .item
      .item
      .item


</template>
<script>

import * as api from '../api/user'
import * as types from '../store/types'

export default {
  data () {
    return {
      input: '' 
    }
  }, 
  methods: {
    login () {
      if (this.input) {
        api.getUserInfo().then(res => {
          if (res.data) {
            this.$store.dispatch(types.setUserInfo, res.data)

            // 处理刷新丢失vuex数据
            window.localStorage.setItem('userInfo', JSON.stringify(res.data))
            this.$router.push('/')
          }
        })
        .catch(error => alert('获取用户信息失败: ' + error))
        
      } else {
        alert('email不能为空')
      }
    }
  }
  
}
  
</script>
<style lang="stylus" scoped>

.body 
  font-family Lato
  width 100%
  overflow hidden
.main 
  font-family Lato
  font-weight 700
  background #595f6f
  width 100%
  overflow hidden
  input 
    text-align center
    margin 0 auto
    margin-top 4.6rem
    width 78.666%
    height 1rem 
    line-height @height
    border-radius 0.04rem 
    border 1px solid #fff 
    background-color rgba(255, 255, 255, 0.6)
    color #595f6f
    font-size 0.28rem
    font-weight 400
    &::placeholder 
      color #595f6f
      font-size 0.28rem
      font-weight 400
  .button 
    margin 0 auto
    margin-top 0.4rem
    margin-bottom 3.04rem
    width 78.666%
    height 1rem 
    line-height @height
    border-radius 0.04rem 
    background #f56e4e
    font-size 0.3rem 
    font-weight 0.4rem
    color #fff
    text-transform uppercase
.base 
  width 100%
  background-color #ececed
  overflow hidden
  .title 
    margin-top 0.96rem
    margin-bottom 1.25rem
    padding 0 1.45rem
    text-align center
    color #7d8c93
    font-size 0.3em
    font-weight 400
    line-height 0.4rem
  .pagination
    margin 0 auto
    margin-bottom 0.5rem
    height 0.1rem
    display flex
    flex-flow row nowrap
    justify-content center
    .item 
      margin 0 0.1rem
      width @height 
      height @height 
      line-height @height
      border-radius 50%
      background #fff
      &:first-child
        background #cbced5
    
</style>