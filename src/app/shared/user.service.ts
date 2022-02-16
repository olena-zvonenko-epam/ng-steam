import { Injectable } from '@angular/core';
import {UserModel} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: UserModel;

  constructor() { }

  updateUserEmail(email: string) {
    this.user.email = email;
  }

  updateUserData(username: string, email: string, age: string) {
    this.user.username = username;
    this.user.email = email;
    this.user.age = age;
  }

}
