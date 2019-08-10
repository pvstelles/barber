<template>
    <div class="row mt-3">
        <card-menu :class="'text-center mt-3 col-' + m.size"
                   v-for="(m, index) in menus"
                   @click.native="go(m.url)"
                   :key="'menu-' + index">
            <font-awesome-icon :icon="m.icone" class="icon-card mt-1"/>
            <span class="mt-2 btn btn-default"><strong>{{ m.titulo }}</strong></span>
        </card-menu>
    </div>
</template>
<script>
import CardMenu from '@/components/CardMenu.vue'
export default {
  name: 'home',
  data () {
    return {
      menus: [
        {url: '/schedules', icone: 'clock', titulo: 'Agendamento', size: '12'},
        {url: '/users', icone: 'user-alt', titulo: 'Usuários', size: '6'},
        {url: '/clients', icone: 'id-card-alt', titulo: 'Clientes', size: '6'},
        {url: '/services', icone: 'tasks', titulo: 'Serviços', size: '6'},
        {url: '/report', icone: 'chart-bar', titulo: 'Relatórios', size: '6'}
      ]
    }
  },
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
</style>
