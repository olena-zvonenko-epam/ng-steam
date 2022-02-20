import { Injectable } from '@angular/core';
import { UserModel } from "./user.model";
import {catchError, map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: UserModel;
  token!: string;

  constructor(private http:HttpClient) { }

  getUser(user: UserModel): Observable<any> {
    this.token = localStorage.getItem('fb-token') || '';
    const us = {
      ...user,
      idToken: this.token,
      displayName: 'test',
      deleteAttribute: 'PHOTO_URL'

    }
    return this.http.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${environment.apiKey}`, us)
      .pipe(
        tap(console.log),
        map(val => localStorage.setItem('fb-token', val.idToken))
      )
  }

  // getUser() {
  //   this.GamesService.getGames()
  //     .subscribe((games: Array<GameModel>) => {
  //       this.games = games;
  //     });
  // }
  //
  // updateUserEmail(email: string) {
  //   this.user.email = email;
  // }
  //
  // updateUserData(username: string, email: string, age: string) {
  //   this.user.username = username;
  //   this.user.email = email;
  //   this.user.age = age;
  // }

}
