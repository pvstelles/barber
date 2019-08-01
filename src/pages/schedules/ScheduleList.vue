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
            <div class="col-12" :key="x" v-for="x in 20" style="vertical-align: top">
                <hr>
                {{ dtInicio.add(30, 'm').format('HH:mm') }}
                <div v-if="x%3 == 0" class="flex-wrap d-flex align-items-center justify-content-center  ">
                    <span>
                        <strong>Paulo Victor - Corte</strong>
                    </span>
                    <font-awesome-icon icon="minus-circle" class="text-danger ml-5 icone-action"/>
                </div>
                <div class="flex-wrap d-flex align-items-center justify-content-center" v-else>
                    <router-link :to="'/schedules/create/' + dtInicio.format('YYYY-MM-DD_HH:mm')">
                        <font-awesome-icon icon="plus-circle" class="text-success ml-5 icone-action"/>
                    </router-link>
                </div>
            </div>
        </div>
    </span>
</template>
<script>
var moment = require('moment')
export default {
  name: 'schedule-list',
  data () {
    return {
      dtNow: moment('08:30', 'HH:mm')
    }
  },
  computed: {
    dtInicio () {
      return this.dtNow
    }
  }
}
</script>
<style>
.icone-action {
    font-size: 50px;
}
</style>
