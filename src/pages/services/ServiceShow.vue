<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Serviços</strong></h1>
                <router-link class="btn btn-outline-dark float-right" to="/services">Voltar</router-link>
            </div>
            <div class="col-12 mt-5">
                <div class="card">
                    <div class="card-body text-center">
                        <service-info :service="this.getService"></service-info>
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>
<script>
import store from '@/store'
import ServiceInfo from '@/components/ServiceInfoComponent'
export default {
  name: 'service-show',
  components: { ServiceInfo },
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    store.dispatch('getService', this.id)
  },
  computed: {
    getService () {
      return store.state.service
    }
  }
}
</script>
<style>
.vl-service label {
    font-size: 25px;
}
.vl-service p {
    font-size: 32px;
}
</style>
