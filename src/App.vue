<template lang="jade" >

#app 
  router-view 
  
</template>

<script>
export default {
  name: 'app',
  mounted () {
    setTimeout(function(){
      document.getElementById('loaders').style.display = 'none'
    }, 500)
  }
}
</script>

<style lang="stylus">
 @import './styles/app.styl'

</style>
