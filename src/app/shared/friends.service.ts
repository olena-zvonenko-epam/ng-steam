import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GameModel} from "./game.model";
import {PersonModel} from "./person.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  url = environment.FbDbUrl;

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<GameModel[]>(`${this.url}/people.json`);
  }

  getFriends() {
    return this.http.get<GameModel[]>(`${this.url}/friends.json`);
  }

  addFriend(person: PersonModel) {
    this.getFriends()
      .subscribe(friends => {
        if(friends.find(friend => friend.id === person.id)) {
          return alert(`${person.name} is already your friend` );
        } else {
          alert(`${person.name} was added to your friends` );
          return this.http.post(`${this.url}/friends.json`, person)
            .subscribe(person => console.log(person))
        }
      });
  }

  removeFriend(person: PersonModel) {
    this.getFriends()
      .subscribe(friends => {
        if(friends.find(friend => friend.id === person.id)) {
          alert(`${person.name} was removed from your friends` );
          return this.http.delete(`${this.url}/friends.json/${person.id}`)
            .subscribe(person => console.log(person))
        } else {
          return alert(`${person.name} is not your friend` );
        }
      });
  }

}
