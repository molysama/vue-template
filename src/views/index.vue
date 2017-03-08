
<template lang="jade">

.body 
  m-box(v-for="box in wrap.boxes", :key="box.index", :type="box.type", @click.native="toSpecia(box.index)").box

</template>
<script>

import _ from 'lodash/fp' 
import { mapGetters } from 'vuex'

function initWrap () {
  const size = 120
  const width = document.getElementById('app').clientWidth
  const height = document.getElementById('app').clientHeight
  
  const row = Math.floor(width / size)
  const col = Math.floor(height / size)
  const allRow = Math.ceil(width / size)
  const allCol = Math.ceil(height / size)
  
  return {
    col: col-1,
    row: row-1,
    validNum: col * row,
    allNum: allCol * allRow
  }
  
}

function createSpecia (boxes, array) {
  array.forEach(index => { 
    boxes[index-1].type = 'specia'
  })
  return boxes
}

function createArray (length) {
  let array = []
  for(let num = 0; num < length; num++ ) {
    array.push({index: num, type: 'normal'})
  }
  return array
  
}


export default {
  data () {
    return {
      wrap: {
        validNum: 0,
        allNum: 0,
        col: -1,
        row: -1,
        boxes: [],
      },
      specia: [1, 5, 7, 10]
    }
  },
  mounted () {
    this.reWrap()
    
    //窗口变化时重新渲染
    window.addEventListener('resize', _.debounce(200)(this.reWrap))
  },
  methods: {
    reWrap () {
      this.wrap = initWrap()
      this.$set(this.wrap, 'boxes', createArray(this.wrap.allNum))
      this.$set(this.wrap, 'boxes', createSpecia(this.wrap.boxes, this.specia))
    },
    
    toSpecia (index) {
      this.$set(this.wrap.boxes[index], 'type', 'specia')
    }
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
    transition background-color 0 ease-in-out
    opacity 0.7

.body 
  font-size 0px
  width 100%
  height 100%
  overflow hidden
.box 
  display inline-block
  font-size 16px
.box1 
  position absolute 
  top 2*box-size
  left @top
</style>