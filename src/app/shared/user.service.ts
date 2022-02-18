import { Injectable } from '@angular/core';
import {UserModel} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserModel = {
    username: '',
    email: '',
    age: ''
  }

  constructor() { }

  updateUserEmail(email: string) {
    this.user.email = email;
  }

  updateUserData(user: UserModel) {
    this.user.username = user.username;
    this.user.email = user.email;
    this.user.age = user.age;
    console.log(user);
  }

  getUserData() {
    return this.user;
  }

}
