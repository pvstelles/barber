<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Cliente</strong></h1>
                <router-link to="/" class="float-right btn btn-outline-dark">Voltar</router-link>
            </div>
            <div class="col-12">
                <client-info :client="getClient"></client-info>
            </div>
        </div>
    </span>
</template>
<script>
import ClientInfo from '@/components/ClientInfoComponent.vue'
import store from '@/store'
export default {
  name: 'client-show',
  components: { ClientInfo },
  created () {
    let id = this.$route.params.id
    store.dispatch('getClient', id)
  },
  computed: {
      getClient () {
          return store.state.client
      }
  }
}
</script>
