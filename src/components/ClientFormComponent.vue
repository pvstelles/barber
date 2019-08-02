<template>
    <span>
        <form action="">
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" class="form-control" v-model="client.name">
            </div>
            <div class="form-group">
                <label for="tel">Telefone:</label>
                <input type="text" class="form-control" v-model="client.phone">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="addClient">Confirmar</button>
                <router-link to="/clients" class="btn btn-outline-primary">Voltar</router-link>
            </div>
            <slot></slot>
        </form>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'client-form',
  data () {
      return {
          client: {
              name: '',
              phone: '',
          }
      }
  },
  methods: {
    addClient () {
        store.dispatch('addClient', this.client)
    }
  }
}
</script>
