<template>
    <div class="col-12" style="vertical-align: top">
        <hr>
        <div class="float-right">
            {{ h.hora }}
        </div>
        <div v-if="h.schedule" class="flex-wrap d-flex align-items-center justify-content-center  ">
            <span>
                <strong>{{ h.schedule.customer.name }} - {{h.schedule.service.name}}</strong>
            </span>
            <router-link :to="'/schedules/' + h.schedule.id">
                <font-awesome-icon icon="bars" class="text-primary ml-5 icone-action"/>
            </router-link>
        </div>
        <div class="flex-wrap d-flex align-items-center justify-content-center" v-else>
            <router-link :to="'/schedules/create/' + dtInicio.format('YYYY-MM-DD') + '_' + h.hora">
                <font-awesome-icon icon="plus-circle" class="text-dark ml-5 icone-action"/>
            </router-link>
        </div>
    </div>
</template>
<script>
const moment = require('moment-timezone')
export default {
  name: 'schedule-info',
  props: ['h'],
  computed: {
    dtInicio () {
      return moment('08:30', 'HH:mm')
    }
  }
}
</script>
