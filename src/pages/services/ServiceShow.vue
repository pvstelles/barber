<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Serviços</strong></h1>
                <router-link class="btn btn-outline-dark float-right" to="/services">Voltar</router-link>
            </div>
            <card-info>
                <service-info :service="this.getService" v-if="!editableService"/>
                <service-form :getService="this.getService" action="editService" v-else/>
            </card-info>
        </div>
    </span>
</template>
<script>
import store from '@/store'
import ServiceInfo from '@/components/ServiceInfoComponent'
import ServiceForm from '@/components/ServiceFormComponent'
import CardInfo from '@/components/CardInfoComponent'
export default {
  name: 'service-show',
  components: { ServiceInfo, ServiceForm, CardInfo },
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    store.dispatch('getService', this.id)
    store.commit('editableService', false)
  },
  computed: {
    getService () {
      return store.state.service
    },
    editableService () {
      return store.state.editableService
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
