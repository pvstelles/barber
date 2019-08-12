<template>
  <div id="app">
    <nav-sup></nav-sup>
    <div class="container-fluid mb-5" style="margin-top: 57px;">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <nav-bot></nav-bot>
  </div>
</template>

<script>
import NavSup from '@/components/NavSupComponent.vue'
import NavBot from '@/components/NavBotComponent.vue'
export default {
  name: 'App',
  components: { NavSup, NavBot }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
.card {
  border-left: 2pt solid black;
  border-bottom: 2pt solid black;
  border-right: 1pt dashed #6cb2eb;
  border-top: 1pt dashed #6cb2eb;
}
</style>
