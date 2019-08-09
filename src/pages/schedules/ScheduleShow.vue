<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2><strong>{{ schedule.schedule_at }}</strong></h2>
                <p class="mt-5">Cliente:</p>
                <h4>{{ schedule.customer.name }}</h4>
                <p class="mt-4">Barbeiro:</p>
                <h4>{{ schedule.barber_user.name }}</h4>
                <p>Serviço: </p>
                <h4>{{ schedule.service.name }}</h4>
                <div class="form-group mt-5">
                    <button class="btn btn-primary">Confirmar Serviço</button>
                    <button class="btn btn-warning mx-2">Faltou</button>
                    <button class="btn btn-danger">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store'
const moment = require('moment-timezone')
export default {
  name: 'schedule-show',
  created () {
    store.dispatch('getSchedule', this.$route.params.id)
  },
  computed: {
    schedule () {
      let aux = store.state.schedule
      aux.schedule_at = moment(aux.schedule_at).format('DD/MM/YYYY HH:mm')
      return aux
    }
  }
}
</script>
