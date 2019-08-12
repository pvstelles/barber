<template>
    <span>
        <div class="mx-auto text-center mb-5">
            <img src="@/assets/user.png" class="img-fluid img-thumbnail rounded-circle shadow-lg">
        </div>
        <div class="form-group">
            <label>Nome:</label>
            <p><strong>{{ client.name }}</strong></p>
        </div>
        <div class="form-group">
            <label>Tel:</label>
            <p><strong>{{ client.phone }}</strong></p>
        </div>
        <div class="form-group">
            <button class="btn btn-outline-dark" @click="isEditable(true)">Editar</button>
            <router-link class="btn btn-outline-dark" to="/clients">Voltar</router-link>
        </div>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'client-info',
  props: ['client'],
  methods: {
    isEditable (value) {
      store.commit('editableClient', value)
    },
    editClient () {
      store.dispatch('editClient', this.client)
    }
  }
}
</script>
<style>
img {
    width: 150px;
}
</style>
