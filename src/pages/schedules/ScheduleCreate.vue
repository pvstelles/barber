<template>
    <span>
        <form action="">
            <div class="form-group">
                <label>Barbeiro:</label>
                <select name="" id="" class="form-control" v-model="schedule.user_id">
                    <option :key="barber.id" :value="barber.id" v-for="barber in barbers">{{ barber.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Cliente:</label>
                <select class="form-control" v-model="schedule.costumer_id">
                    <option :key="client.id" v-for="client in clients" :value="client.id">{{ client.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Horario:</label>
                <input type="date" class="form-control mb-2" v-model="schedule.dia">
                <select class="form-control" v-model="schedule.hora">
                    <option :key="h.hora" v-for="h in this.horaAux" :value="h.hora">
                        {{ h.hora }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="">Serviço</label>
                <select class="form-control" v-model="schedule.service_id">
                    <option :value="service.id" v-for="service in services" :key="service.id">{{ service.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="addSchedule">Agendar</button>
                <router-link to="/schedules" class="btn btn-outline-primary">Voltar</router-link>
            </div>
        </form>
    </span>
</template>
<script>
import moment from 'moment'
import store from '@/store'
export default {
  name: 'schedule-create',
  data () {
    return {
      horario: '',
      horaAux: [
        {
          hora: '09:00',
          schedule: null
        },
        {
          hora: '09:30',
          schedule: null
        },
        {
          hora: '10:00',
          schedule: null
        },
        {
          hora: '10:30',
          schedule: null
        },
        {
          hora: '11:00',
          schedule: null
        },
        {
          hora: '11:30',
          schedule: null
        },
        {
          hora: '12:00',
          schedule: null
        },
        {
          hora: '12:30',
          schedule: null
        },
        {
          hora: '13:00',
          schedule: null
        },
        {
          hora: '13:30',
          schedule: null
        },
        {
          hora: '14:00',
          schedule: null
        },
        {
          hora: '14:30',
          schedule: null
        },
        {
          hora: '15:00',
          schedule: null
        },
        {
          hora: '15:30',
          schedule: null
        },
        {
          hora: '16:00',
          schedule: null
        },
        {
          hora: '16:30',
          schedule: null
        },
        {
          hora: '17:00',
          schedule: null
        },
        {
          hora: '17:30',
          schedule: null
        },
        {
          hora: '18:00',
          schedule: null
        }
      ],
      hora: '',
      schedule: {
        user_id: '',
        costumer_id: '',
        hora: '',
        dia: '',
        service_id: ''
      }
    }
  },
  computed: {
    dia () {
      return this.horario.format('YYYY-MM-DD')
    },
    barbers () {
      return store.state.users
    },
    clients () {
      return store.state.clients
    },
    services () {
      return store.state.services
    },
    me () {
      return store.state.me
    }
  },
  created () {
    this.horario = moment(this.$route.params.horario.replace('_', ' '))
    this.schedule.hora = this.horario.format('HH:mm')
    this.schedule.dia = this.horario.format('YYYY-MM-DD')
    store.dispatch('getMe')
    store.dispatch('getUsers')
    store.dispatch('getClients')
    store.dispatch('getServices')
  },
  methods: {
    addSchedule () {
      store.dispatch('addSchedule', this.schedule)
    }
  }
}
</script>
