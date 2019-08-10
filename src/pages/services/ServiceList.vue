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
                <service-table class="mt-5" :services="getServices"/>
            </div>
        </div>
    </span>
</template>
<script>
import ServiceTable from '@/components/ServiceTableComponent.vue'
import store from '@/store'
export default {
  name: 'service-list',
  created () {
    store.dispatch('getServices')
  },
  components: { ServiceTable },
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
