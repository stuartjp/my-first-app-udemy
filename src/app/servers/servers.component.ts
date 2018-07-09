import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',      // as a tag eg <app-servers></app-servers> // this is the best/normal way
  // selector: '[app-servers]', // as an attribute of a tag eg <div app-servers></div>
  // selector: '.app-servers',  // as a class eg <div class=".app-servers"></div>
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverCount:number = 0;
  serverName: string = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  } 

  onCreateServer() {
    this.serverCreated = true;
    // this.serverCount += 1;
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverCount + ' servers created, last name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
