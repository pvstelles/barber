<template>
    <div>
        <div class="row mt-3">
            <div class="col-12">
                <h1 class="float-left"><strong>Barbeiros</strong></h1>
                <router-link to="/" class="float-right btn btn-outline-dark">Voltar</router-link>
            </div>

            <div class="col-12 mt-3">
                <router-link to="/users/create" class="btn btn-info">Add</router-link>
            </div>
            <div class="col-12">
                <user-table :users="getUsers"/>
            </div>
        </div>
    </div>
</template>
<script>
import UserTable from '@/components/UserTableComponent.vue'
import store from '@/store'
export default {
  name: 'user-list',
  components: { UserTable },
  created () {
    store.dispatch('getUsers')
  },
  computed: {
    getUsers () {
      return store.state.users
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
