const API_URL = 'http://localhost:8080/sgp/api/departements'

export class BurgerService {
    constructor ($http, $q) {
        this.$http = $http
        this.$q = $q
        this.departements = []
    }

    // return promise of clients
    getClients () {
        if (this.departements.length !== 0) {
            return this.$q.resolve(this.departements)
        }

        return this.$http.get(API_URL)
        .then(response => response.data)
        .then(departements => {
            this.departements = departements
            return departements
        })
    }
}