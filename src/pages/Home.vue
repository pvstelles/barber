<template>
    <div class="row mt-3">
        <div class="col-12 mt-3">
            <card-menu class="text-center">
                <font-awesome-icon icon="clock" class="icon-card mt-1"/>
                <router-link to="/" class="mt-2 btn btn-default"><strong>Agendamento</strong></router-link>
            </card-menu>
        </div>
        <div class="col-6 mt-3">
            <card-menu class="text-center">
                <font-awesome-icon icon="user-alt" class="icon-card mt-1"/>
                <router-link to="/" class="mt-2 btn btn-default"><strong>Usuários</strong></router-link>
            </card-menu>
        </div>
        <div class="col-6 mt-3">
            <card-menu class="text-center">
                <font-awesome-icon icon="id-card-alt" class="icon-card mt-1"/>
                <router-link to="/" class="mt-2 btn btn-default"><strong>Clientes</strong></router-link>
            </card-menu>
        </div>
        <div class="col-6 mt-3">
            <card-menu class="text-center">
                <font-awesome-icon icon="tasks" class="icon-card mt-1"/>
                <router-link to="/" class="mt-2 btn btn-default"><strong>Serviços</strong></router-link>
            </card-menu>
        </div>
        <div class="col-6 mt-3">
            <card-menu class="text-center">
                <font-awesome-icon icon="chart-bar" class="icon-card mt-1"/>
                <router-link to="/" class="mt-2 btn btn-default"><strong>Relatórios</strong></router-link>
            </card-menu>
        </div>
    </div>
</template>
<script>
import CardMenu from '@/components/CardMenu.vue'
export default {
  name: 'home',
  components: { CardMenu }
}
</script>
<style>
.icon-card {
    font-size: 100px;
}
</style>
