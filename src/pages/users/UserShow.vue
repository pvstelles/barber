<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Barbeiro</strong></h1>
                <router-link to="/users" class="float-right btn btn-outline-dark">Voltar</router-link>
            </div>
            <card-info>
                <user-info :user="getUser" v-if="!editableUser"/>
                <user-form :getUser="getUser" action="editUser" v-else/>
            </card-info>
        </div>
    </span>
</template>
<script>
import UserInfo from '@/components/UserInfoComponent.vue'
import UserForm from '@/components/UserFormComponent.vue'
import CardInfo from '@/components/CardInfoComponent.vue'
import store from '@/store'
export default {
  name: 'user-show',
  components: { UserInfo, UserForm, CardInfo },
  created () {
    let id = this.$route.params.id
    store.dispatch('getUser', id)
    store.commit('editableUser', false)
  },
  computed: {
    getUser () {
      return store.state.user
    },
    editableUser () {
      return store.state.editableUser
    }
  }
}
</script>
