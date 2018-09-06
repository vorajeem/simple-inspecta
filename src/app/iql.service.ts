import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IqlService {

  private connection;
  private isConnected = false;
  constructor() { }

  public connect() {
    const host = window.location.host.substring(0,
    window.location.host.indexOf(':')) + ':8080';

    const wsurl = 'ws://' + host + '/websockets/iql.js';

    this.connection = new WebSocket(wsurl);

    this.connection.onopen = (event) => {
      this.isConnected = true;
      console.log('Connected ekse');
    };
  }
}
