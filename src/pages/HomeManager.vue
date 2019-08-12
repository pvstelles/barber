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
  name: 'home-manager',
  components: { CardMenu },
  data () {
    return {
      menus: [
        {url: '/users', icone: 'user-alt', titulo: 'Usuários', size: '6'},
        {url: '/clients', icone: 'id-card-alt', titulo: 'Clientes', size: '6'},
        {url: '/services', icone: 'tasks', titulo: 'Serviços', size: '12'},
      ]
    }
  },
  methods: {
    go (url) {
      this.$router.push(url)
    }
  }
}
</script>
