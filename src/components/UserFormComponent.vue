<template>
    <span>
        <form action="">
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" class="form-control" v-model="user.name">
            </div>
            <div class="form-group">
                <label for="name">Email:</label>
                <input type="text" class="form-control" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="name">Senha:</label>
                <input type="text" class="form-control" v-model="user.password">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="addClient">Confirmar</button>
                <router-link to="/users" class="btn btn-outline-primary">Voltar</router-link>
            </div>
            <slot></slot>
        </form>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'user-form',
  data () {
    return {
      user: {
        name: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    addClient () {
      store.dispatch('addUser', this.user)
    }
  }
}
</script>
