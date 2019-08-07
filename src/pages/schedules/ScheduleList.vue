<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1><strong>Agendamentos</strong></h1>
            </div>
            <div class="col-12">
                <div class="form-group">
                    <select name="" id="" class="form-control">
                        <option value="">Leandro</option>
                        <option value="">Bruno</option>
                        <option value="">Juliano</option>
                    </select>
                </div>
            </div>
            <div class="col-12 mt-3">
                <span class="badge badge-success" style="font-size: 24px;">
                    {{ dtInicio.format('DD/MM/YYYY') }}
                <input type="date" class="form-control">
                </span>
            </div>
            <div class="col-12" :key="h.hora" v-for="h in schedules" style="vertical-align: top">
                <hr>
                {{ h.hora }}
                <div v-if="h.schedule" class="flex-wrap d-flex align-items-center justify-content-center  ">
                    <span>
                        <strong>Paulo Victor - Corte</strong>
                    </span>
                    <font-awesome-icon icon="minus-circle" class="text-danger ml-5 icone-action"/>
                </div>
                <div class="flex-wrap d-flex align-items-center justify-content-center" v-else>
                    <router-link :to="'/schedules/create/' + dtInicio.format('YYYY-MM-DD') + '_' + h.hora">
                        <font-awesome-icon icon="plus-circle" class="text-success ml-5 icone-action"/>
                    </router-link>
                </div>
            </div>
        </div>
    </span>
</template>
<script>
import store from '@/store'
var moment = require('moment-timezone')
export default {
  name: 'schedule-list',
  data () {
    return {
      dtNow: moment('08:30', 'HH:mm'),
      horario: [{hora:'09:00',schedule: null},{hora:'09:30',schedule: null},{hora:'10:00',schedule: null},{hora:'10:30',schedule: null},{hora:'11:00',schedule: null},{hora:'11:30',schedule: null},{hora:'12:00',schedule: null},{hora:'12:30',schedule: null},{hora:'13:00',schedule: null},{hora:'13:30',schedule: null},{hora:'14:00',schedule: null},{hora:'14:30',schedule: null},{hora:'15:00',schedule: null},{hora:'15:30',schedule: null},{hora:'16:00',schedule: null},{hora:'16:30',schedule: null},{hora:'17:00',schedule: null},{hora:'17:30',schedule: null},{hora:'18:00',schedule: null}]
    }
  },
  computed: {
    dtInicio () {
      return this.dtNow
    },
    schedules () {
      store.state.schedules.forEach((schedule) => {

        var pos = this.horario.map((h) => {
          return h.hora
        }).indexOf(moment(schedule.schedule_at).format('HH:mm'))
        if (pos > -1) {
          this.horario[pos].schedule = schedule
          console.log(this.horario[pos])
        }
      })
      return this.horario
    }
  },
  mounted () {
    store.dispatch('getUsers')
    store.dispatch('getMe')
    store.dispatch('getSchedules', {schedule_at: moment().clone().format('YYYY-MM-DD')})
  }
}
</script>
<style>
.icone-action {
    font-size: 50px;
}
</style>
