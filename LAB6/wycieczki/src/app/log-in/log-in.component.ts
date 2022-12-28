import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../services/account-data.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  constructor(private accountService : AccountDataService, private formBuilder: FormBuilder) {}

  loginForm!: FormGroup


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group ({
      email: [''],
      password: ['']
    })
  }

  logIn() {
    let email = this.loginForm.get('email')!.value
    let password = this.loginForm.get('password')!.value
    this.accountService.LogIn(email, password)
  }
}
