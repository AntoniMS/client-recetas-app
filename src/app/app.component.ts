import { Component } from '@angular/core';
import { registerStatus } from './core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public statusRegistered = '';




  public setStatusRegistered(event: registerStatus) {
    this.statusRegistered = event.status
  }
}