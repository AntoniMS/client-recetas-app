import { Component, EventEmitter, OnInit, Output } from '@angular/core';



import { registerStatus } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() public emmitStatusRegistered = new EventEmitter<registerStatus>();

  constructor(public userService: UserService ) { }

  ngOnInit(): void {
    
  }

  public logout(): void {
    this.userService.doLogout();
  }
  public sendRegisterStatus (status: registerStatus): void {
    this.emmitStatusRegistered.emit(status);
  }

}
