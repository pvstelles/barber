<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Serviços</strong></h1>
                <router-link class="btn btn-outline-dark float-right" to="/services">Voltar</router-link>
            </div>
            <div class="col-12 mt-5">
                <form action="">
                    <div class="form-group">
                        <label for="">Serviço:</label>
                        <input type="text" class="form-control" v-model="service.name">
                    </div>
                    <div class="form-group">
                        <label for="">Valor:</label>
                        <input type="text" class="form-control" v-model="service.price">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="addService">Cadastrar</button>
                        <router-link class="btn btn-outline-primary" to="/services">Voltar</router-link>
                    </div>
                </form>
            </div>
        </div>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'service-create',
  data () {
    return {
      service: {
        name: '',
        price: ''
      }
    }
  },
  methods: {
    addService () {
      store.dispatch('addService', this.service)
    }
  }
}
</script>
