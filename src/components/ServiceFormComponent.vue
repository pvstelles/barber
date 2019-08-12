<template>
    <form action="">
        <div class="form-group">
            <label :class="{ 'text-danger': errors.name }">Serviço:</label>
            <input type="text" class="form-control" :class="{ 'border-danger': errors.name }" v-model="service.name">
            <span v-if="errors.name" class="text-danger"><small>{{ errors.name }}</small></span>
        </div>
        <div class="form-group">
            <label :class="{ 'text-danger': errors.price }">Valor:</label>
            <input type="text" class="form-control" :class="{ 'border-danger': errors.price }" v-model="service.price">
            <span v-if="errors.price" class="text-danger"><small>{{ errors.price }}</small></span>
        </div>
        <div class="form-group">
            <button class="btn btn-dark" @click.prevent="emitForm">Confirmar</button>
            <button class="btn btn-outline-dark" @click.prevent="btnBack">Voltar</button>
        </div>
    </form>
</template>
<script>
import store from '@/store'
import HandleErrorForm from '@/services/HandlerErroForm'
export default {
  name: 'service-form',
  props: [ 'action', 'getService' ],
  data () {
    return {
      service: {
        price: '',
        name: ''
      },
      errors: {}
    }
  },
  mounted () {
    if (this.getService) {
      this.service = this.getService
    }
  },
  methods: {
    emitForm () {
      store.dispatch(this.action, this.service)
        .then(response => this.btnBack())
        .catch(reject => { this.errors = new HandleErrorForm(reject, '').handle() })
    },
    btnBack () {
      if (this.service.id) {
        store.commit('editableService', false)
      } else {
        this.$router.push('/services')
      }
    }
  }
}
</script>
