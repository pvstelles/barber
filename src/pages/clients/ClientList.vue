<template>
    <div>
        <div class="row mt-3">
            <div class="col-12">
                <h1 class="float-left"><strong>Clientes</strong></h1><router-link to="/" class="float-right btn btn-outline-dark">Voltar</router-link>
            </div>
            <div class="col-12 mt-3">
                <router-link to="/clients/create" class="btn btn-info">Add</router-link>
            </div>
            <div class="col-12">
                <client-table :clients="getClients"></client-table>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store'
import ClientTable from '@/components/ClientTableComponent.vue'
export default {
  name: 'client',
  created () {
    store.dispatch('getClients')
  },
  components: { ClientTable },
  computed: {
    getClients () {
      return store.state.clients
    }
  }
}
</script>
<style>
.img-table {
    max-width: 60px !important;
}
.item-table {
  vertical-align: middle !important;
}
.icon-table {
  font-size: 30px;
}
</style>
