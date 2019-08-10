<template>
    <form>
        <div class="form-group">
            <label>Usuário</label>
            <input type="text" class="form-control" v-model="credentials.email">
        </div>
        <div class="form-group">
            <label>Senha</label>
            <input type="password" class="form-control" v-model="credentials.password">
        </div>
        <div class="form-group">
            <button @click.prevent="login" class="btn btn-primary">Entrar</button>
            <button class="btn btn-link">Esqueci minha senha</button>
        </div>
    </form>
</template>
<script>
import http from '@/services/http.js'
export default {
  name: 'login-form',
  data () {
    return {
      credentials: {
        email: 'pvstelles@gmail.com',
        password: 'secret123'
      }
    }
  },
  methods: {
    login () {
      http.post('/api/login', this.credentials)
        .then(response => this.validaLogin(response))
    },
    validaLogin (response) {
      if (!response.data.status) {
        alert('Login ou senha invalido!')
        return
      }
      sessionStorage.setItem('token', response.data.token)
      this.$router.push('/')
    }
  }
}
</script>
