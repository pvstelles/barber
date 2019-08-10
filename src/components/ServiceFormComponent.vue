<template>
    <form action="">
        <div class="form-group">
            <label>Serviço:</label>
            <input type="text" class="form-control" v-model="service.name">
        </div>
        <div class="form-group">
            <label>Valor:</label>
            <input type="text" class="form-control" v-model="service.price">
        </div>
        <div class="form-group">
            <button class="btn btn-primary" @click.prevent="emitForm">Confirmar</button>
            <button class="btn btn-outline-primary" @click.prevent="btnBack">Voltar</button>
        </div>
    </form>
</template>
<script>
import store from '@/store'
export default {
  name: 'service-form',
  props: [ 'action', 'getService' ],
  data () {
    return {
      service: {
        price: '',
        name: ''
      }
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
