import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { debounceTime} from 'rxjs/operators';
import { account } from '../Iaccount';
import { AccountDataService } from '../services/account-data.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  accountForm!: FormGroup

  formErrors = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  }

  private validationMessages = {
    fname: {
      required: 'Imię jest wymagane!',
      pattern: 'Same litery!',
      minlength: 'Minimum 3 litery!',
      maxlength: 'Minimum 15 litery!'
    },
    lname: {
      required: 'Nazwisko jest wymagane!',
      pattern: 'Same litery!',
      minlength: 'Minimum 3 litery!',
      maxlength: 'Minimum 20 litery'
    },
    email: {
      required: 'Email jest wymagany!',
      pattern: 'Przykładowy email to example@test.pl',
    },
    password: { //TODO lepszy validator hasła bo jest tylko ogólny 
      required: 'Nazwisko jest wymagane!',
      minlength: 'Minimum 8 znaków!',
    }
  }

  constructor(private formBuilder : FormBuilder, private accountService : AccountDataService) {}

  ngOnInit(): void {
      this.accountForm = this.formBuilder.group ({
        fname: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-złćźężąóu]+'), Validators.minLength(3), Validators.maxLength(15)]],
        lname: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-złćźężąóu]+'), Validators.minLength(3), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.pattern('[A-złćźężąóu0-9]+[@][a-z]+[.][a-z]{2,3}')]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      })
      this.accountForm.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
        this.onControlValueChanged()
       })
       this.onControlValueChanged()
  }

  onControlValueChanged() : void {
    const form = this.accountForm

    for (let field in this.formErrors) {
      this.formErrors[field as keyof typeof this.formErrors]= ''
      let control = form.get(field)
      
      if (control && control.dirty && !control.valid) {
        const validationMessages = this.validationMessages[field as keyof typeof this.validationMessages]
        console.log(validationMessages)
        for (const key in control.errors) {
          console.log(key)
          console.log(validationMessages[key as keyof typeof validationMessages])
          this.formErrors[field as keyof typeof this.formErrors] += validationMessages[key as keyof typeof validationMessages];
        }
      }
      console.log(this.formErrors)
    }
  }

  makeAccount() {
    if (!this.accountForm.valid) {
      return 
    }
    let newAccount = {
      fname: this.accountForm.get('fname')!.value,
      lname: this.accountForm.get('lname')!.value,
      email: this.accountForm.get('email')!.value,
      password: this.accountForm.get('password')!.value,
    }
    console.log(newAccount)
    return newAccount
  }

  signUp() {
    this.accountService.SignUp(this.makeAccount())
  }

  signOut() {
    this.accountService.SignOut()
  }


}

