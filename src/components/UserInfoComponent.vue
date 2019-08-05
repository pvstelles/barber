<template>
    <span>
        <div class="card mt-5">
            <div class="card-body">
                <div class="mx-auto text-center mb-5">
                    <img src="@/assets/user.png" alt="" class="img-fluid img-thumbnail rounded-circle">
                </div>
                <div class="form-group">
                    <label>Nome:</label>
                    <p v-if="!editable"><strong>{{ user.name }}</strong></p>
                    <input v-if="editable" type="text" class="form-control" v-model="user.name">
                </div>
                <div class="form-group">
                    <button v-if="!editable" class="btn btn-outline-dark" @click="isEditable(true)">Editar</button>
                    <button v-if="editable" class="btn btn-outline-dark" @click="editUser">Salvar</button>
                    <button v-if="editable" class="btn btn-outline-dark" @click="isEditable(false)">Cancelar</button>
                </div>
            </div>
        </div>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'user-info',
  props: ['user'],
  data () {
    return {
      editable: false
    }
  },
  methods: {
    isEditable (value) {
      this.editable = value
    },
    editUser () {
      store.dispatch('editUser', this.user)
      this.isEditable(false)
    }
  }
}
</script>
