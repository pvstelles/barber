<template>
    <form>
        <div class="form-group">
            <label :class="errors.name ? 'text-danger' : ''">Nome:</label>
            <input type="text" class="form-control" :class="errors.name ? 'border-danger' : ''" v-model="client.name">
            <span v-if="errors.name" class="text-danger"><small>{{ errors.name }}</small></span>
        </div>
        <div class="form-group">
            <label :class="errors.phone ? 'text-danger' : ''">Telefone:</label>
            <input type="text" class="form-control" :class="errors.phone ? 'border-danger' : ''" v-model="client.phone">
            <span v-if="errors.phone" class="text-danger"><small>{{ errors.phone }}</small></span>

        </div>
        <div class="form-group">
            <button class="btn btn-dark" @click.prevent="emitForm">Confirmar</button>
            <button class="btn btn-outline-dark" @click="btnBack">Voltar</button>
        </div>
    </form>
</template>
<script>
import HandleErrorsForm from '@/services/HandlerErroForm.js'
import store from '@/store'
export default {
  name: 'client-form',
  props: ['action', 'getClient'],
  data () {
    return {
      client: {
        name: '',
        phone: ''
      },
      errors: {}
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
          console.log(response)
          this.btnBack()
        }).catch((reject) => {
          this.errors = new HandleErrorsForm(reject, 'formClient').handle()
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
