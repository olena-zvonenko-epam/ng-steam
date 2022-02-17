import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GameModel} from "./game.model";
import {PersonModel} from "./person.model";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<GameModel[]>(`${this.url}/people`);
  }

  getFriends() {
    return this.http.get<GameModel[]>(`${this.url}/friends`);
  }

  addFriend(person: PersonModel) {
    this.getFriends()
      .subscribe(friends => {
        if(friends.find(friend => friend.id === person.id)) {
          return alert(`${person.name} is already your friend` );
        } else {
          alert(`${person.name} was added to your friends` );
          return this.http.post(`${this.url}/friends`, person, this.httpOptions)
            .subscribe(person => console.log(person))
        }
      });
  }

  removeFriend(person: PersonModel) {
    this.getFriends()
      .subscribe(friends => {
        if(friends.find(friend => friend.id === person.id)) {
          alert(`${person.name} was removed from your friends` );
          return this.http.delete(`${this.url}/friends/${person.id}`, this.httpOptions)
            .subscribe(person => console.log(person))
        } else {
          return alert(`${person.name} is not your friend` );
        }
      });
  }

}
