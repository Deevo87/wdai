import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'
import {Validators } from '@angular/forms'
import { debounceTime} from 'rxjs/operators';
import { Post } from '../Iposts';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  @Input() id = 0
  @Input() tName = ''
  @Output() formSubmitPost = new EventEmitter<Post>()
  postForm !: FormGroup

  posts: Post[] = []
  isBought!: boolean
  isBanned!: boolean

  formErrors = {
    postName: '',
    postTripName: '',
    postStartDate: '',
    postShortDesc: '',
  }

  private validationMessages = {
    postName: {
      required: 'Nazwa jest wymagana!',
      minlength: 'Minimum 3 znaki.',
      custom: ""
    },
    postTripName: {
      required: 'Nazwa wycieczki jest wymagana!',
      pattern: 'Poprawny format nazwy to np. "Gorąca Antarktyda".'

    },
    postShortDesc: {
      required: 'Opis jest wymagany!',
      minlength: 'Minimum 20 znaków.',
      maxlength: 'Maksimum 500 znaków.'
    },
  }
  role!: any
  constructor(private formBuilder : FormBuilder, public accountService : AccountDataService) {
    this.role = accountService.currRole.split(',')
   }

  getCurrRole() {
    console.log(this.role)
    return this.role
  }

  addNewItem(newPost: Post) {
    this.formSubmitPost.emit(newPost)
  }

  ngOnInit(): void {
    this.isBought = false
    this.isBanned = false
    this.accountService.getUserInfo().subscribe(change => {
      for (let item of change.bought) {
        if (item.name === this.tName) {
          this.isBought = true
        }
      }
      if (change.isBanned) {
        this.isBanned = true
      }
    })
    this.postForm = this.formBuilder.group({
      postTripName: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-złćźężąóu]+[ ][A-Z]{1}[a-złćźężąóu]+')]],
      postName: ['', [Validators.required, Validators.minLength(3)]],
      postStartDate: [''],
      postShortDesc: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
    })
    this.postForm.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.onControlValueChanged()
    })
    this.onControlValueChanged()
  }

  onControlValueChanged() : void {
    const form = this.postForm

    for (let field in this.formErrors) {
      this.formErrors[field as keyof typeof this.formErrors]= ''
      let control = form.get(field)
      
      if (control && control.dirty && !control.valid) {
        const validationMessages = this.validationMessages[field as keyof typeof this.validationMessages]
        for (const key in control.errors) {
          this.formErrors[field as keyof typeof this.formErrors] += validationMessages[key as keyof typeof validationMessages];
        }
      }
    }
  }


  makeNewPost() {
      if (!this.postForm.valid || this.isAccurateName(this.postForm.get('postName')!.value)) {
        return
      }
    this.id += 1
    let newPost = {
      id: this.id,
      name: this.postForm.get('postName')!.value,
      tripName: this.postForm.get('postTripName')!.value,
      startDate: this.postForm.get('postStartDate')!.value,
      shortDesc: this.postForm.get('postShortDesc')!.value,
    } as Post
    this.addNewItem(newPost)
    this.postForm.reset()
  }

  isAccurateName(name : string) {
    if (name === this.tName) {
      return true
    }
    return false
  }

}

