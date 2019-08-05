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
                <table class="table table-hover table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="client.id" v-for="client in getClients">
                            <td><img src="@/assets/user.png" alt="" class="img-fluid img-thumbnail rounded-circle img-table"></td>
                            <td class="item-table">{{ client.name }}</td>
                            <td class="item-table"><router-link to="/clients/1"><font-awesome-icon icon="bars" class="icon-table mt-1"/></router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'client',
  created () {
    store.dispatch('getClients')
  },
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
