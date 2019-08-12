<template>
    <div class="row mt-3">
        <card-menu class="text-center mt-3 col-12">
            <div class="row">
                <div class="col-12">
                    <h2 class="shadow-sm border border-dark"><strong>Resumo do dia</strong></h2>
                </div>
                <div class="col-6">
                    <font-awesome-icon icon="cut" class="icon-card"></font-awesome-icon>
                </div>
                <div class="col-6">
                    <h6 class="mt-2">Agendamentos:  <span class="badge badge-secondary">6</span></h6>
                    <h6 class="mt-2">Concluidos:  <span class="badge badge-secondary">2</span></h6>
                </div>
            </div>
        </card-menu>

        <test-chart class="col-12 mt-3 mb-5 pb-5" :chartdata="chartdata" :options="options"></test-chart>
    </div>
</template>
<script>
import CardMenu from '@/components/CardMenu.vue'
import TestChart from '@/charts/TestChart.vue'
export default {
  name: 'home',
  components: { CardMenu, TestChart },
  data () {
    return {
      chartdata: {
        labels: ['Red'],
        datasets: [
          {
            label: 'Test Chart Red',
            data: [5],
            backgroundColor: [
              'rgb(18, 48, 52)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgb(18, 48, 52)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'Test Chart Blue',
            data: [12],
            backgroundColor: [
              'rgb(7, 10, 52)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  methods: {
    go (url) {
      this.$router.push(url)
    }
  }
}
</script>
<style>
    test {
        background-color: rgb(7, 10, 52);
    }
</style>
