
<template lang="jade">

.body 
  m-box(v-if="wrap.boxes", v-for="(box, index) in wrap.boxes", :key="index").box

</template>
<script>

import _ from 'lodash/fp' 
import { mapGetters } from 'vuex'

function getPikiboxNumber () {
  const size = 120
  const width = document.getElementById('app').clientWidth
  const height = document.getElementById('app').clientHeight
  
  const row = Math.floor(width / size)
  const col = Math.floor(height / size)
  
  return {
    col: col - 1,
    row: row - 1,
    num: col * row
  }
  
}

export default {
  data () {
    return {
      wrap: {
        num: 0,
        col: -1,
        row: -1,
        boxes: [1,2,3]
      }
    }
  },
  mounted () {
    this.wrap = getPikiboxNumber()
    this.$set(this.wrap, 'boxes', new Array(this.wrap.num).fill(0))
  }

  //TODO create gooey
  //TODO add color box

}
  
</script>
<style lang="stylus" scoped>
@import '../styles/main.styl'

.pikibox
  display inline-block
  width 100%
  height 100%
  transition background-color 0.8s ease
  margin-top -3px 
  z-index -3
  &:hover 
    background-color #655
    transition background-color 0 ease
    opacity 0.7

.body 
  font-size 0px
.box 
  display inline-block
  font-size 16px
.box1 
  position absolute 
  top 2*box-size
  left @top
</style>