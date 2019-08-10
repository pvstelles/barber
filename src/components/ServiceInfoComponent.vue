<template>
    <span>
        <h1>{{ service.name }}</h1>
        <div class="text-left mt-5 vl-service">
            <label><strong>Valor:</strong></label>
            <p class="text-info"><strong>R$ {{ service.price }}</strong></p>
        </div>
        <div class="w-100 mt-3 text-left">
            <button class="btn btn-primary" @click="editableService">Editar</button>
        </div>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'service-info',
  props: ['service'],
  methods: {
    editableService () {
      store.commit('editableService', true)
    }
  }
}
</script>
