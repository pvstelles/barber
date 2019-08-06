import http from '@/services/http'
import router from '@/router'
const moment = require('moment-timezone')
const unauthenticated  = (data) => {
    if(data.message == 'Unauhenticated.') {
      sessionStorage.removeItem('token')
        router.push('/login')
        return false
    }
    return true
}

const actions = {
  getClients (store) {
    http.get('/api/costumers').then(response => {
        store.commit('setClientsStore', response.data)
    }).catch(response => {
      sessionStorage.removeItem('token')
      router.push('/login')
    })
  },
  getClient (store, id) {
    http.get('/api/costumers/' + id).then(response => {
      store.commit('setClientStore', response.data)
    })
  },
  addClient (store, client) {
    http.post('/api/costumers', client).then(response => {
      router.push('/clients')
    })
  },
  editClient (store, client) {
    http.put('/api/costumers/' + client.id, client).then(response => {
      console.log(response.data)
    })
  },
  getServices (store) {
    http.get('/api/services').then(response => {
      store.commit('setServices', response.data)
    })
  },
  getService (store, id) {
    http.get('/api/services/' + id).then(response => {
      store.commit('setService', response.data)
    })
  },
  addService (store, service) {
    http.post('/api/services', service).then(response => {
      router.push('/services/' + response.data.id)
    })
  },
  editService (store, service) {
    http.put('/api/services/' + service.id, service).then(response => {
    })
  },
  destroyService (store, id) {
    http.delete('/api/services/' + id)
    router.push('/services')
  },
  getUsers (store) {
    http.get('/api/users').then(response => {
      store.commit('setUsers', response.data)
    })
  },
  getUser (store, id) {
    http.get('/api/users/' + id).then(response => {
      store.commit('setUser', response.data)
    })
  },
  addUser (store, user) {
    http.post('/api/users', user).then(response => {
      router.push('/users/' + response.data.id)
    })
  },
  editUser (store, user) {
    http.put('/api/users/' + user.id, user).then(response => {
    })
  },
  getSchedules (store, schedules) {
    http.post('/api/schedules', schedules).then(response => {
      store.commit('setSchedules', response.data)
    })
  }

}

export default actions
