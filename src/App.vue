<template lang="jade" >

#app 
  router-view 
  
</template>

<script>
export default {
  name: 'app',
  mounted () {
    document.getElementById('loaders').style.display = 'none'
  }
}
</script>

<style lang="stylus">
 @import './styles/app.styl'

</style>
