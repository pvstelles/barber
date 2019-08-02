import http from '@/services/http'
import router from '@/router'

const actions = {
    getClients (store) {
        http.get('/api/costumers').then(response => {
            store.commit('setClientsStore', response.data)
        })
    },
    getClient (store,id) {
        http.get('/api/costumers/' + id).then(response => {
            store.commit('setClientStore', response.data)
        })
    },
    addClient (store, client) {
        http.post('/api/costumers',client).then(response => {
            router.push('/clients')
        })
    }
}

export default actions
