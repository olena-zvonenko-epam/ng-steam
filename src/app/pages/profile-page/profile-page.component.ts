import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {UserModel} from "../../shared/user.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  // form = new FormGroup({
  //   username: new FormControl(),
  //   email: new FormControl(),
  //   age: new FormControl(),
  // });

  form!: FormGroup;

  user!: UserModel

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUserData();
    console.log(this.user.email);
  }

  onSave(form: FormGroup) {
    this.userService.updateUserData(form.value)

  }

}
