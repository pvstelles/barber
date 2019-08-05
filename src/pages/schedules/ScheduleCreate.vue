<template>
    <span>
        <form action="">
            <div class="form-group">
                <label>Barbeiro:</label>
                <select name="" id="" class="form-control">
                    <option value="">Leandro</option>
                    <option value="">Bruno</option>
                    <option value="">Juliano</option>
                </select>
            </div>
            <div class="form-group">
                <label>Cliente:</label>
                <select class="form-control">
                    <option :key="x" v-for="x in 5" value="">Paulo Victor ({{x}})</option>
                </select>
            </div>
            <div class="form-group">
                <label>Horario:</label>
                <input type="date" class="form-control mb-2" :value="dia">
                <select class="form-control" :model="this.hora">
                    <option :key="h" v-for="h in this.horaAux" :selected="h == hora">
                        {{ h }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="">Serviço</label>
                <select class="form-control">
                    <option value="">Corte Cabelo</option>
                    <option value="">Barba</option>
                </select>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Agendar</button>
                <router-link to="/schedules" class="btn btn-outline-primary">Voltar</router-link>
            </div>
        </form>
    </span>
</template>
<script>
import moment from 'moment'
export default {
  name: 'schedule-create',
  data () {
    return {
      horario: '',
      horaAux: [],
      hora: ''
    }
  },
  computed: {
    dia () {
      return this.horario.format('YYYY-MM-DD')
    }
  },
  created () {
    this.horario = moment(this.$route.params.horario.replace('_', ' '))
    var aux = moment('09:00', 'HH:mm')
    for (let x = 0; x < 20; x++) {
      this.horaAux.push(aux.format('HH:mm'))
      aux.add(30, 'm')
    }
    this.hora = this.horario.format('HH:mm')
    console.log(this.hora)
  }
}
</script>
