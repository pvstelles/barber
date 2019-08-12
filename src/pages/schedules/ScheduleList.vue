<template>
    <span>
        <div class="row">
            <picker-day/>
        </div>
        <div class="row">
            <schedule-menu/>
        </div>
        <div class="row">
            <schedule-info :key="h.hora" v-for="h in schedules" :h="h"></schedule-info>
        </div>
    </span>
</template>
<script>
import store from '@/store'
import ScheduleInfo from '@/components/ScheduleInfoComponent'
import PickerDay from '@/components/PickerDayComponent'
import ScheduleMenu from '@/components/ScheduleMenuComponent'
var moment = require('moment-timezone')
export default {
  name: 'schedule-list',
  data () {
    return {
      dtNow: moment('08:30', 'HH:mm'),
      horario: [
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
      userS: '',
      schedule_at: {
        bd: '',
        print: ''
      }
    }
  },
  components: { ScheduleInfo, PickerDay, ScheduleMenu },
  computed: {
    dtInicio () {
      return this.dtNow
    },
    schedules () {
      this.resetHorario()
      store.state.schedules.forEach((schedule) => {
        var pos = this.horario.map((h) => {
          return h.hora
        }).indexOf(moment(schedule.schedule_at).format('HH:mm'))
        if (pos > -1) {
          this.horario[pos].schedule = schedule
        }
      })
      return this.horario
    },
    users () {
      return store.state.users
    },
    me () {
      return store.state.me
    }
  },
  mounted () {
    store.dispatch('getUsers')
    store.dispatch('getMe').then((data) => {
      console.log(this.me)
      if (!this.userS.id) {
        this.userS = this.me
      }
    })
    this.schedule_at.bd = moment().clone().format('YYYY-MM-DD')
    this.schedule_at.print = moment().clone().format('DD/MM/YYYY')
    store.dispatch('getSchedules', {schedule_at: moment().clone().format('YYYY-MM-DD'), user: this.userS})
  },
  methods: {
    getSchedule () {
      store.dispatch('getSchedules', {schedule_at: this.schedule_at.bd, user: this.userS})
    },
    resetHorario () {
      this.horario = [
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
          ]
    }
  }
}
</script>
<style>
.icone-action {
    font-size: 30px;
}
</style>
