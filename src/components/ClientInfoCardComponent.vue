<template>
    <span>
        <div class="mx-auto text-center mb-5">
            <img src="@/assets/user.png" alt="" class="img-fluid img-thumbnail rounded-circle">
        </div>
        <div class="form-group">
            <label>Nome:</label>
            <p v-if="!editable"><strong>{{ client.name }}</strong></p>
            <input v-if="editable" type="text" class="form-control" v-model="client.name">
        </div>
        <div class="form-group">
            <label>Tel:</label>
            <p v-if="!editable"><strong>{{ client.phone }}</strong></p>
            <input v-if="editable" type="text" class="form-control" v-model="client.phone">
        </div>
        <div class="form-group">
            <button v-if="!editable" class="btn btn-outline-dark" @click="isEditable(true)">Editar</button>
            <button v-if="editable" class="btn btn-outline-dark" @click="editClient">Salvar</button>
            <button v-if="editable" class="btn btn-outline-dark" @click="isEditable(false)">Cancelar</button>
        </div>
    </span>
</template>
<script>
import store from '@/store'
import ClientScheduleTable from '@/components/ClientScheduleTableComponent'
export default {
  name: 'client-info',
  props: ['client'],
  components: { ClientScheduleTable },
  data () {
    return {
      editable: false
    }
  },
  methods: {
    isEditable (value) {
      this.editable = value
    },
    editClient () {
      store.dispatch('editClient', this.client)
    }
  }
}
</script>
