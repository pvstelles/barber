<template>
    <form>
        <div class="form-group">
            <label>Nome:</label>
            <input type="text" class="form-control" v-model="client.name">
        </div>
        <div class="form-group">
            <label>Telefone:</label>
            <input type="text" class="form-control" v-model="client.phone">
        </div>
        <div class="form-group">
            <button class="btn btn-primary" @click.prevent="emitForm">Confirmar</button>
            <button class="btn btn-outline-primary" @click="btnBack">Voltar</button>
        </div>
    </form>
</template>
<script>
import store from '@/store'
export default {
  name: 'client-form',
  props: ['action', 'getClient'],
  data () {
    return {
      client: {
        name: '',
        phone: ''
      }
    }
  },
  mounted () {
    if (this.getClient) {
      this.client = this.getClient
    }
  },
  methods: {
    emitForm () {
      store.dispatch(this.action, this.client)
        .then(response => {
          this.btnBack()
        })
    },
    btnBack () {
      if (this.client.id) {
        store.commit('editableClient', false)
      } else {
        this.$router.push('/clients')
      }
    }
  }
}
</script>
