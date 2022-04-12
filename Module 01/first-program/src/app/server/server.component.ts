import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    /**
     * Other ways to declare the selector:
     * 1) As an attribute:
     * selector: '[app-server]'
     * Using it on the html: <div app-server></div>
     * 
     * 2) As a class:
     * selector: '.app-server'
     * Using it on the html: <div class="app-server"></div>
     * 
    */
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    allowNewServer = false;

    getServerStatus() {
        return this.serverStatus;
    }

}