import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   
  public signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private authService: UserService,
    private router: Router
  ) { 
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      emoji: ['']
    })
  }
    
  ngOnInit()  {}

  public registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) =>{
      if (res.result) {
        this.signupForm.reset()
        this.router.navigate(['']);
      }
    })  

    }
  }


