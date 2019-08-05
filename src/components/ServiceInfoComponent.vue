<template>
    <span>
        <h1>{{ service.name }}</h1>
        <div class="text-left mt-5 vl-service" v-if="!editable">
            <label for=""><strong>Valor:</strong></label>
            <p class="text-info"><strong>R$ {{ service.price }}</strong></p>
        </div>
        <div class="form-group text-left" v-if="editable">
            <label for="">Nome:</label>
            <input type="text" class="form-control" v-model="service.name">
            <label for="" class="mt-2">Valor</label>
            <input type="text" class="form-control" v-model="service.price">
        </div>
        <div class="w-100 mt-3 text-left">
            <button v-if="!editable" class="btn btn-primary" @click="isEditable(true)">Editar</button>
            <button v-if="editable" class="btn btn-primary" @click="editService">Salvar</button>
            <button v-if="editable" class="btn btn-primary" @click="isEditable(false)">Cancelar</button>
            <button class="btn btn-outline-dark" @click="destroyService">Excluir</button>
        </div>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'service-info',
  props: ['service'],
  data () {
    return {
      editable: false
    }
  },
  methods: {
    isEditable (value) {
      this.editable = value
    },
    editService () {
      store.dispatch('editService', this.service)
      this.isEditable(false)
    },
    destroyService () {
      store.dispatch('destroyService', this.service.id)
    }
  }
}
</script>
