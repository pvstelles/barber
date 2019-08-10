<template>
    <span>
        <form>
            <div class="form-group">
                <label>Nome:</label>
                <input type="text" class="form-control" v-model="user.name">
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="text" class="form-control" v-model="user.email">
            </div>
            <div class="form-group">
                <label>Senha:</label>
                <input type="text" class="form-control" v-model="user.password">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click.prevent="emitForm">Confirmar</button>
                <button @click.prevent="btnBack" class="btn btn-outline-primary">Voltar</button>
            </div>
        </form>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'user-form',
  props: [ 'action', 'getUser' ],
  data () {
    return {
      user: {
        name: '',
        password: '',
        email: ''
      }
    }
  },
  mounted () {
    if (this.getUser) {
      this.user = this.getUser
    }
  },
  methods: {
    emitForm () {
      store.dispatch(this.action, this.user)
        .then(result => this.btnBack())
    },
    btnBack () {
      if (this.getUser) {
        store.commit('editableUser', false)
      } else {
        this.$router.push('/users')
      }
    }
  }
}
</script>
