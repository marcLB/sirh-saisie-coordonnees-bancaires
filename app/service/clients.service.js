const API_URL = 'http://localhost:8080/sgp/api/collaborateurs'

export class ClientsService {
    constructor ($http, $q) {
        this.$http = $http
        this.$q = $q
        this.clients = []
    }

    // return promise of clients
    getClients () {
        if (this.clients.length !== 0) {
            return this.$q.resolve(this.clients)
        }

        return this.$http.get(API_URL)
        .then(response => response.data)
        .then(clients => {
            this.clients = clients
            return clients
        })
    }
}

