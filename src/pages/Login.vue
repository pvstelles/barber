<template>
    <div class="d-flex align-items-center" style="height: calc(100% - 56px)">
        <div class="card flex-fill mt-5">
            <div class="card-body">
                <h3 class="card-title text-center">Login</h3>
                <login-form></login-form>
            </div>
        </div>
    </div>
</template>
<script>
import http from '@/services/http'
import LoginForm from '@/components/LoginFormComponent.vue'
export default {
  name: 'login',
  components: { LoginForm },
  data () {
    return {
      credentials: {
        email: 'pvstelles@gmail.com',
        password: 'secret123'
      }
    }
  }
}
</script>
