import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;

  charsCount = 5;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
        email: new FormControl('',
          [Validators.required, Validators.email],
        ),
        password: new FormControl('',
          [Validators.required, this.checkLength.bind(this)]),
    });
  }


  onSubmit(email: any) {
    this.userService.updateUserEmail(email)
  }

  checkLength(control: FormControl) {
    if(control.value.length <= this.charsCount) {
      return {
        'lengthError': true
      }
    }
    return null
  }
}
