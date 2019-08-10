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
  editableClient (state, value) {
    state.editableClient = value
  },
  setServices (state, services) {
    state.services = services
  },
  setService (state, service) {
    state.service = service
  },
  editableService (state, value) {
    state.editableService = value
  },
  setUsers (state, users) {
    state.users = users
  },
  setUser (state, user) {
    state.user = user
  },
  editableUser (state, value) {
    state.editableUser = value
  },
  setSchedules (state, schedules) {
    state.schedules = schedules
  },
  setSchedule (state, schedule) {
    state.schedule = schedule
  },
  setMe (state, me) {
    state.me = me
  }
}

export default mutations
