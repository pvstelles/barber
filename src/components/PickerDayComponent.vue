<template>
    <div class="col-12 d-flex justify-content-start position-fixed bg-white picker-day px-0">
        <div class="px-2 py-3 rounded-top border-left" v-for="day in days">
            <div class="shadow border badge py-3 rounded-lg" :class="day.format('YY-MM-DD') === now ? 'badge-info border-dark' : 'badge-dark border-info'">
                <p><strong class="border-bottom info-day">{{ day.format('DD') }}</strong></p>
                <p class="info-month">{{ day.format('dddd') }}</p>
            </div>
        </div>
    </div>
</template>
<script>
const moment = require('moment-timezone')
export default {
  name: 'picker-day',
  data () {
    return {
      days: []
    }
  },
  mounted () {
    let dtNow = moment()
    dtNow = dtNow.subtract(2, 'days')
    for (let x = 0; x < 11; x++) {
      this.days.push(dtNow.clone())
      dtNow.add(1, 'day')
    }
  },
  computed: {
    now () {
      return moment().format('YY-MM-DD')
    }
  }
}
</script>
<style>
.info-day {
    font-size: 25px;
}
.info-month {
    font-size: 10px;
    margin-bottom: 0px;
}
.picker-day {
  z-index: 9999;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  overflow-x: auto;
}
.picker-day::-webkit-scrollbar {
  width: 0 !important;
}
</style>
