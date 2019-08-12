<template>
    <nav class="navbar fixed-bottom bg-dark nav-bot" v-if="isLogged">
        <div class="d-flex justify-content-around col-12">
            <router-link to="/manager/home">
                <font-awesome-icon icon="edit" class='icon' :class="getModulo == 'manager' ? 'active' : '' "></font-awesome-icon>
            </router-link>
            <router-link to="/">
                <font-awesome-icon icon="home" class="icon" :class="getModulo == '' ? 'active' : '' "></font-awesome-icon>
            </router-link>
            <router-link to="/schedules">
                <font-awesome-icon icon="calendar-alt" class="icon" :class="getModulo == 'schedule' ? 'active' : '' "></font-awesome-icon>
            </router-link>
        </div>
    </nav>
</template>
<script>
import store from '@/store'
export default {
  name: 'nav-bot',
  computed: {
    isLogged () {
      return store.state.isLogged
    },
    getModulo () {
      return this.$route.meta.navModule
    }
  }
}
</script>
<style>
.nav-bot {
    border-radius: 80px !important;
    margin-bottom: 15px !important;
}
.icon {
    font-size: 20px;
    color: whitesmoke;
}
.active {
    color: #6cb2eb;
}
</style>
