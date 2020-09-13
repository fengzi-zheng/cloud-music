<template>
  <div id="app">
    <!-- <router-view /> -->
    <!-- <router-view></router-view> -->
    <Mheader></Mheader>
  </div>
</template>

<script>
  import Mheader from "./components/m-header/m-header.vue";
export default {
  name:"app",
  components:{
    Mheader
  }
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color #ccc
}
</style>
