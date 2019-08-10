<template>
    <span>
        <div class="mx-auto text-center mb-5">
            <img src="@/assets/user.png" alt="" class="img-fluid img-thumbnail rounded-circle">
        </div>
        <div class="form-group">
            <label>Nome:</label>
            <p><strong>{{ user.name }}</strong></p>
        </div>
        <div class="form-group">
            <button class="btn btn-outline-dark" @click="editableUser(true)">Editar</button>
        </div>
    </span>
</template>
<script>
import store from '@/store'
export default {
  name: 'user-info',
  props: ['user'],
  methods: {
    editableUser (value) {
      store.commit('editableUser', value)
    }
  }
}
</script>
