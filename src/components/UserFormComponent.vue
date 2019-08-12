<template>
    <span>
        <form>
            <div class="form-group">
                <label :class="{ 'text-danger': errors.name }">Nome:</label>
                <input type="text" class="form-control" :class="{ 'border-danger': errors.name }" v-model="user.name">
                <span v-if="errors.name" class="text-danger"><small>{{ errors.name }}</small></span>
            </div>
            <div class="form-group">
                <label :class="{ 'text-danger': errors.email }">Email:</label>
                <input type="text" class="form-control" :class="{ 'border-danger': errors.email }" v-model="user.email">
                <span v-if="errors.email" class="text-danger"><small>{{ errors.email }}</small></span>
            </div>
            <div class="form-group">
                <label :class="{ 'text-danger': errors.password }">Senha:</label>
                <input type="text" class="form-control" :class="{ 'border-danger': errors.password }" v-model="user.password">
                <span v-if="errors.password" class="text-danger"><small>{{ errors.password }}</small></span>
            </div>
            <div class="form-group">
                <label :class="{ 'text-danger': errors.password }">Confirme a senha:</label>
                <input type="text" class="form-control" :class="{ 'border-danger': errors.password }" v-model="user.password_confirmation">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click.prevent="emitForm">Confirmar</button>
                <button @click.prevent="btnBack" class="btn btn-outline-primary">Voltar</button>
            </div>
        </form>
    </span>
</template>
<script>
import HandlerErroFrom from '@/services/HandlerErroForm.js'
import store from '@/store'
export default {
  name: 'user-form',
  props: [ 'action', 'getUser' ],
  data () {
    return {
      user: {
        name: '',
        password: '',
        password_confirmation: '',
        email: ''
      },
      errors: {}
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
        .catch((result) => {
          this.errors = new HandlerErroFrom(result, 'teste').handle()
        })
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
