
<template lang="jade">

.body
  .main
    .header
      img(src="../assets/list.png").logo 
      .text BLOCKS
      img(src="../assets/icon.png").icon
    input(type="text", placeholder="Email", v-model="input")
    .button(@click.prevent="login") LOGIN
  .base 
    .title
      span Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. 
    .pagination
      .item
      .item
      .item


</template>
<script>

export default {
  data () {
    return {
      input: '' 
    }
  }, 
  methods: {
    login () {
      if (this.input) {
        this.$router.push('/')
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
  .header 
    box-sizing border-box
    width 100%
    margin-top 0.79rem
    padding 0 0.4rem
    height 0.42rem 
    line-height @height
    display flex
    flex-flow row nowrap
    justify-content space-between
    .logo, .text, .icon
      max-height @height
      font-size 0.3rem
      color #fff
  input 
    text-align center
    margin 0 auto
    margin-top 6rem
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
    margin-top 0.65rem
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