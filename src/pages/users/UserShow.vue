<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Barbeiro</strong></h1>
                <router-link to="/users" class="float-right btn btn-outline-dark">Voltar</router-link>
            </div>
            <div class="col-12">
                <user-info :user="getUser"></user-info>
            </div>
        </div>
    </span>
</template>
<script>
import UserInfo from '@/components/UserInfoComponent.vue'
import store from '@/store'
export default {
  name: 'user-show',
  components: { UserInfo },
  created () {
    let id = this.$route.params.id
    store.dispatch('getUser', id)
  },
  computed: {
    getUser () {
      return store.state.user
    }
  }
}
</script>
