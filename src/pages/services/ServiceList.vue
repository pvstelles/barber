<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Serviços</strong></h1>
                <router-link class="btn btn-outline-dark float-right" to="/">Voltar</router-link>
            </div>
            <div class="col-12">
                <router-link class="btn btn-success mt-3" to="/services/create">Add</router-link>
            </div>
            <div class="col-12">
                <table class="table table-striped mt-5">
                    <thead>
                    <tr>
                        <th>Serviço</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="service.id" v-for="service in getServices">
                        <td>{{ service.name }}</td>
                        <td>R$ {{ service.price }}</td>
                        <td class="text-center">
                            <router-link :to="'/services/' + service.id">
                                <font-awesome-icon icon="bars" class="icon-table"></font-awesome-icon>
                            </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'service-list',
  created () {
    store.dispatch('getServices')
  },
  computed: {
    getServices () {
      return store.state.services
    }
  }
}
</script>
<style>
.icon-table {
    font-size: 25px;
}
</style>
