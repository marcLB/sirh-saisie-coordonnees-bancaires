import './clients.component.css'
import template from './clients.component.html'

class controller {

    $onInit () {
        this.clients = angular.copy(this.clients)
    }
}

export let ClientsComponent = {
    template,
    controller,
    bindings: {
        clients: '<',
    }
}
