import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) { 
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit()  { }

  public loginUser(): void {
    this.userService.singIn(this.signinForm.value)
  }

}
