<template>
    <span>
        <div class="card mt-5">
            <div class="card-body">
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
            </div>
        </div>

        <div class="my-5">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <td>Dia</td>
                        <td>Horario</td>
                        <td>Qtd</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-success">
                        <td>30/07/2019</td>
                        <td>09:00</td>
                        <td>2</td>
                    </tr>
                    <tr :key="x" v-for="x in 5">
                        <td>22/04/2019</td>
                        <td>09:00</td>
                        <td>2</td>
                    </tr>

                </tbody>

            </table>
        </div>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'client-info',
  props: ['client'],
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
