<template>
    <div class="d-flex align-items-center" style="height: calc(100% - 56px)">
        <div class="card flex-fill">
            <div class="card-body">
                <h3 class="card-title text-center">Login</h3>
                <form action="">
                    <div class="form-group">
                        <label>Usuário</label>
                        <input type="text" class="form-control" v-model="credentials.email">
                    </div>
                    <div class="form-group">
                        <label>Senha</label>
                        <input type="password" class="form-control" v-model="credentials.password">
                    </div>
                    <div class="form-group">
                        <button @click="login" class="btn btn-primary">Entrar</button>
                        <button class="btn btn-link">Esqueci minha senha</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import http from '@/services/http'

export default {
  name: 'login',
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
        .then(response => {
          console.log(response.data)
          if (response.data.status) {
            sessionStorage.setItem('token', response.data.token)
            this.$router.push('/')
          } else {
            alert('Login ou senha invalido!')
          }
        })
    }
  }
}
</script>
