<template>
    <nav class="navbar navbar-light bg-light fixed-top">
        <router-link to="/" class="navbar-brand">Studio JB</router-link>
        <div class="float-right">
            <a v-if="isLogged" @click="logout">Sair</a>
        </div>
    </nav>
</template>
<script>
import store from '@/store'
export default {
  name: 'nav-sup',
  computed: {
    isLogged () {
      return store.state.isLogged
    }
  },
  methods: {
    logout () {
      sessionStorage.clear()
      store.commit('setToken', false)
      this.$router.push('/login')
    }
  }
}
</script>
