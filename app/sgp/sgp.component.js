//import './game.component.css'
import template from './sgp.component.html'

class controller {
    constructor (ClientsService, BurgerService) {
        this.ClientsService = ClientsService
        this.DepartementService=BurgerService
        this.departement="hrllo"
    }

    $onInit () {
        this.ClientsService.getClients()
        .then(clients => this.clients = clients)
        this.DepartementService.getClients()
        .then(departements => this.departements = departements)
        console.log(this.departement)
    }
}

export let SgpComponent = {
    template,
    controller,
    bindings: {
        departement: '<'
    }
}
