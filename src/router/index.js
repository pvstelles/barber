import Vue from 'vue'
import Router from 'vue-router'
import multiGuard from 'vue-router-multiguard'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import ClientList from '@/pages/clients/ClientList.vue'
import ClientCreate from '@/pages/clients/ClientCreate.vue'
import ClientShow from '@/pages/clients/ClientShow.vue'
import ScheduleList from '@/pages/schedules/ScheduleList.vue'
import ScheduleCreate from '@/pages/schedules/ScheduleCreate.vue'
import ScheduleShow from '@/pages/schedules/ScheduleShow.vue'
import ServiceList from '@/pages/services/ServiceList.vue'
import ServiceCreate from '@/pages/services/ServiceCreate.vue'
import ServiceShow from '@/pages/services/ServiceShow.vue'
import UserList from '@/pages/users/UserList.vue'
import UserCreate from '@/pages/users/UserCreate.vue'
import UserShow from '@/pages/users/UserShow.vue'
import HomeManager from '@/pages/HomeManager.vue'
import store from '@/store'

Vue.use(Router)

const isLogged = (to, from, next) => {
  let token = sessionStorage.getItem('token')
  if (!token) {
    next('/login')
  } else {
    store.commit('setToken', true)
    next()
  }
}

const notLogged = (to, from, next) => {
  let token = sessionStorage.getItem('token')
  if (!token) {
    next()
  } else {
    next('/')
  }
}

const setModulo = (to, from, next) => {
  console.log(to.matched)
}

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: multiGuard([notLogged])

    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: '' }
    },
    {
      path: '/clients',
      name: 'ClientList',
      component: ClientList,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    },
    {
      path: '/clients/create',
      name: 'ClientCreate',
      component: ClientCreate,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    },
    {
      path: '/clients/:id',
      name: 'ClientShow',
      component: ClientShow,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    },
    {
      path: '/schedules',
      name: 'ScheduleList',
      component: ScheduleList,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'schedule' }
    },
    {
      path: '/schedules/create/:horario',
      name: 'ScheduleCreate',
      component: ScheduleCreate,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'schedule' }
    },
    {
      path: '/schedules/:id',
      name: 'ScheduleShow',
      component: ScheduleShow,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'schedule' }
    },
    {
      path: '/services',
      name: 'ServiceList',
      component: ServiceList,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    },
    {
      path: '/services/create',
      name: 'ServiceCreate',
      component: ServiceCreate,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    },
    {
      path: '/services/:id',
      name: 'ServiceShow',
      component: ServiceShow,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    },
    {
      path: '/users/create',
      name: 'UserCreate',
      component: UserCreate,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    },
    {
      path: '/users/:id',
      name: 'UserShow',
      component: UserShow,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    },
    {
      path: '/manager/home',
      name: 'HomeManager',
      component: HomeManager,
      beforeEnter: multiGuard([isLogged]),
      meta: { navModule: 'manager' }
    }
  ]
})
