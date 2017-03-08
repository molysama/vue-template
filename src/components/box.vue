
<template lang="jade">

.box(:class="type")

</template>
<style lang="stylus" scoped>
@import '../styles/main.styl'

.box 
  margin 0
  padding 0 
  box-sizing border-box
  width box-size
  height @width
  background transparent
  transition background 1.2s ease
.normal:hover
  background #191919
  transition background 0s
.specia
  background #35A8C3
  border-radius 5%




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
  },
  props: {
    type: {
      type: String,
      default: 'normal'
    }
  }

}
  
</script>