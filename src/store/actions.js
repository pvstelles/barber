import http from '@/services/http'
import router from '@/router'

const unauthenticated = (data) => {
  sessionStorage.removeItem('token')
  router.push('/login')
}

const actions = {
  getClients (store) {
    http.get('/api/costumers').then(response => {
      store.commit('setClientsStore', response.data)
    })
      .catch(response => {
        unauthenticated(response.data)
      })
  },
  getClient (store, id) {
    http.get('/api/costumers/' + id).then(response => {
      store.commit('setClientStore', response.data)
    })
  },
  addClient (store, client) {
    return new Promise((resolve, reject) => {
      http.post('/api/costumers', client).then(response => {
        router.push('/clients')
        resolve()
      }).catch((error) => {
        reject(error.response.data)
      })
    })
  },
  editClient (store, client) {
    return new Promise((resolve, reject) => {
      http.put('/api/costumers/' + client.id, client)
        .then(response => {
          resolve()
        })
        .catch(errors => {
          reject(errors.response.data)
        })
    })
  },
  getServices (store) {
    http.get('/api/services').then(response => {
      store.commit('setServices', response.data)
    }).catch(reject => unauthenticated(reject.data))
  },
  getService (store, id) {
    http.get('/api/services/' + id).then(response => {
      store.commit('setService', response.data)
    })
  },
  addService (store, service) {
    return new Promise((resolve,reject) => {
      http.post('/api/services', service).then(response => {
        router.push('/services/' + response.data.id)
      }).catch(errors => {
        reject(errors.response.data)
      })
    })
  },
  editService (store, service) {
    return new Promise((resolve,reject) => {
      http.put('/api/services/' + service.id, service).then(response => {
        resolve()
      }).catch(errors => {
        reject(errors.response.data)
      })
    })
  },
  destroyService (store, id) {
    http.delete('/api/services/' + id)
    router.push('/services')
  },
  getUsers (store) {
    http.get('/api/users').then(response => {
      store.commit('setUsers', response.data)
    }).catch(response => {
      unauthenticated(response.data)
    })
  },
  getUser (store, id) {
    http.get('/api/users/' + id).then(response => {
      store.commit('setUser', response.data)
    })
  },
  addUser (store, user) {
    return new Promise((resolve, reject) => {
      http.post('/api/users', user).then(response => {
        resolve()
      }).catch(errors => {
        reject(errors.response.data)
      })
    })
  },
  editUser (store, user) {
    return new Promise((resolve, reject) => {
      http.put('/api/users/' + user.id, user).then(response => {
        resolve()
      }).catch(errors => {
        reject(errors.response.data)
      })
    })
  },
  getMe (store) {
    http.get('/api/me').then(response => {
      store.commit('setMe', response.data)
      return response.data
    })
  },
  getSchedules (store, schedules) {
    http.post('/api/schedules', schedules).then(response => {
      store.commit('setSchedules', response.data)
    })
  },
  getSchedule (store, id) {
    http.get('/api/schedules/' + id)
      .then(response => {
        store.commit('setSchedule', response.data)
      })
  },
  addSchedule (store, schedule) {
    http.post('/api/schedules/store', schedule).then(response => {
    })
  }
}

export default actions
