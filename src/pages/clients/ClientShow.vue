<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Cliente</strong></h1>
                <router-link to="/clients" class="float-right btn btn-outline-dark">Voltar</router-link>
            </div>
            <card-info>
                <client-info :client="getClient" class="col-12" v-if="!editableClient"></client-info>
                <client-form :getClient="getClient" action="editClient" v-else></client-form>
            </card-info>

            <div class="col-12 my-5">
                <client-schedule-table/>
            </div>
        </div>
    </span>
</template>
<script>
import ClientInfo from '@/components/ClientInfoComponent.vue'
import ClientScheduleTable from '@/components/ClientScheduleTableComponent.vue'
import ClientForm from '@/components/ClientFormComponent.vue'
import store from '@/store'
import CardInfo from '@/components/CardInfoComponent.vue'
export default {
  name: 'client-show',
  components: { ClientInfo, ClientScheduleTable, ClientForm, CardInfo },
  created () {
    let id = this.$route.params.id
    store.dispatch('getClient', id)
    store.commit('editableClient', false)
  },
  computed: {
    getClient () {
      return store.state.client
    },
    editableClient () {
      return store.state.editableClient
    }
  }
}
</script>
