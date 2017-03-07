
<template lang="jade">

.box

</template>
<style lang="stylus" scoped>
@import '../styles/main.styl'

.box 
  margin 0
  padding 0 
  box-sizing border-box
  width box-size
  height @width
  // border-radius 5%
  // background rgba(18, 18, 18, 1)
  background transparent
  transition background 1.2s ease
  &:hover 
    background #191919
    transition background 0s


</style>
<script>

export default {
  data () {
    return {
      isLeave: false
    }
  },
  methods: {
    mouseOut () {
      console.log('out')
    }
  }

}
  
</script>