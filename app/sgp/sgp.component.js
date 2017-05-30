//import './game.component.css'
import template from './sgp.component.html'

class controller {
    constructor (ClientsService, $location) {
        this.$location=$location
        this.ClientsService = ClientsService
    }

    $onInit () {
        this.ClientsService.getClients()
        .then(clients => this.clients = clients)
    }
}

export let SgpComponent = {
    template,
    controller,
    bindings: {
    }
}
