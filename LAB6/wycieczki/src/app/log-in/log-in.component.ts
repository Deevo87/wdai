import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../services/account-data.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  constructor(private accountService : AccountDataService, private formBuilder: FormBuilder, private router : Router) {}

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
    this.reloadAll()
  }

  reloadAll() {
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['']).then(()=>{
        window.location.reload
      })
    })
  }
}
