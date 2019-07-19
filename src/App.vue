<template>
  <div id="app">
    <nav-sup></nav-sup>
    <div class="container-fluid" style="height: calc(100% - 56px)">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavSup from '@/components/NavSupComponent.vue'
export default {
  name: 'App',
  components: { NavSup }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}
</style>
