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
  }
}

export default mutations
