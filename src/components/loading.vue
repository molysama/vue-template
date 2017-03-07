
<template lang="pug">

section.loaders
  span.loader.loader-double 
  |  加载中...

</template>
<style lang="stylus" scoped >

.loaders {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 40px;
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  height: 300px;
  line-height: 300px;
  position absolute
  left 0 
  right 0 
}

.loader {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  vertical-align: middle;
}

.loader-double {
  border-radius: 50px;
  border: 6px solid transparent;
  border-top-color: #fff;
  border-bottom-color: #fff;
  animation: spin 1.5s linear infinite;
}
.loader-double:before, .loader-double:after {
  content: '';
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 50px;
  border: 6px solid transparent;
  border-top-color: #fff;
  border-bottom-color: #fff;
  opacity: 0.6;
  animation: spinreverse 2s linear infinite;
}
.loader-double:before {
  top: 15px;
  left: 15px;
  bottom: 15px;
  right: 15px;
  animation: spinreverse 3s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinreverse {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

</style>