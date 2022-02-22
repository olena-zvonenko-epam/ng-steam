import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PersonModel } from "./person.model";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class FriendsService {
//
//   url = 'http://localhost:3000';
//
//   constructor(private http: HttpClient) { }
//
//   getPeople() {
//     return this.http.get<GameModel[]>(`${this.url}/people`);
//   }
//
//   getFriends() {
//     return this.http.get<GameModel[]>(`${this.url}/friends`);
//   }
//
//   addFriend(person: PersonModel) {
//     this.getFriends()
//       .subscribe(friends => {
//         if(friends.find(friend => friend.id === person.id)) {
//           return alert(`${person.name} is already your friend` );
//         } else {
//           alert(`${person.name} was added to your friends` );
//           return this.http.post(`${this.url}/friends`, person)
//             .subscribe(person => console.log(person))
//         }
//       });
//   }
//
//   removeFriend(person: PersonModel) {
//     this.getFriends()
//       .subscribe(friends => {
//         if(friends.find(friend => friend.id === person.id)) {
//           alert(`${person.name} was removed from your friends` );
//           return this.http.delete(`${this.url}/friends/${person.id}`)
//             .subscribe(person => console.log(person))
//         } else {
//           return alert(`${person.name} is not your friend` );
//         }
//       });
//   }
//
// }

export class FriendsService {

  url = 'https://ng-steam-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(`${this.url}/people.json`)
      .pipe(map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => {
              return {
                ...response[key],
                id: key,
              }
            })
        }
      ))
  }

  getFriends() {
    return this.http.get(`${this.url}/friends.json`)
      .pipe(map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => {
              return {
                ...response[key],
                id: key,
              }
            })
        }
      ))
  }

  addFriend(person: PersonModel) {
    this.getFriends()
      .subscribe(friends => {
        if (friends.find(friend => friend.id === person.id)) {
          return alert(`${person.name} is already your friend`);
        } else {
          alert(`${person.name} was added to your friends`);
          return this.http.patch(`${this.url}/friends/${person.id}.json`, person).subscribe();
        }
      });
  }

  removeFriend(person: any) {
    this.getFriends()
      .subscribe(friends => {
        if (friends.find(friend => friend.id === person.id)) {
          alert(`${person.name} was removed from your friends`);
          return this.http.delete(`${this.url}/friends/${person.id}.json`).subscribe();
        } else {
          return alert(`${person.name} is not your friend`);
        }
      });
  }
}
