const mutations = {
  setToken (state, token) {
    state.isLogged = token
  },
  setClientsStore (state, clients) {
    state.clients = clients
  },
  setClientStore (state, client) {
    state.client = client
  },
  setClientToClients (state, client) {
    state.clients.push(client)
  },
  setServices (state, services) {
    state.services = services
  },
  setService (state, service) {
    state.service = service
  },
  setUsers (state, users) {
    state.users = users
  },
  setUser (state, user) {
    state.user = user
  },
  setSchedules (state, schedules) {
    state.schedules = schedules
  }
}

export default mutations
