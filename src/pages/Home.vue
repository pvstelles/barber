<template>
    <div class="row mt-3">
        <div class="col-12 mt-3" @click="go('/schedules')">
            <card-menu class="text-center">
                <font-awesome-icon icon="clock" class="icon-card mt-1"/>
                <span class="mt-2 btn btn-default"><strong>Agendamento</strong></span>
            </card-menu>
        </div>
        <div class="col-6 mt-3 go-card" @click="go('/users')">
            <card-menu class="text-center">
                <font-awesome-icon icon="user-alt" class="icon-card mt-1"/>
                <span class="mt-2 btn btn-default"><strong>Usuários</strong></span>
            </card-menu>
        </div>
        <div class="col-6 mt-3" @click="go('/clients')">
            <card-menu class="text-center">
                <font-awesome-icon icon="id-card-alt" class="icon-card mt-1"/>
                <span class="mt-2 btn btn-default"><strong>Clientes</strong></span>
            </card-menu>
        </div>
        <div class="col-6 mt-3" @click="go('/services')">
            <card-menu class="text-center">
                <font-awesome-icon icon="tasks" class="icon-card mt-1"/>
                <span class="mt-2 btn btn-default"><strong>Serviços</strong></span>
            </card-menu>
        </div>
        <div class="col-6 mt-3" @click="go('/report')">
            <card-menu class="text-center">
                <font-awesome-icon icon="chart-bar" class="icon-card mt-1"/>
                <span class="mt-2 btn btn-default"><strong>Relatórios</strong></span>
            </card-menu>
        </div>
    </div>
</template>
<script>
import CardMenu from '@/components/CardMenu.vue'
export default {
  name: 'home',
  components: { CardMenu },
  methods: {
    go (url) {
      this.$router.push(url)
    }
  }
}
</script>
<style>
.icon-card {
    font-size: 90px;
}
.go-card {
    cursor: pointer;
}
</style>
