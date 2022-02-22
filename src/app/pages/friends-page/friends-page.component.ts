import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PersonModel} from "../../shared/person.model";
import {FriendsService} from "../../shared/friends.service";

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {

  people = new Array<PersonModel>();
  friends = new Array<PersonModel>();

  form = new FormGroup({
    search: new FormControl()
  });

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.getFriends();
    this.getPeople();
  }

  getFriends() {
    this.friends = [];
    this.friendsService.getFriends()
      .subscribe((friends: Array<PersonModel>) => {
        for (let friendsKey in friends) {
          this.friends.push(friends[friendsKey])
        }
      });
  }

  getPeople() {
    this.people = [];
    this.friendsService.getPeople()
      .subscribe((people: Array<PersonModel>) => {
        for (let peopleKey in people) {
          this.people.push(people[peopleKey])
        }
      });
  }

  filter(query: string) {
    if(query.length) {
      query = query.toLowerCase().trim();
      this.people = this.people.filter(person => {
        return person.name.toLowerCase().includes(query);
      });
    } else {
      this.getPeople()

    }
  }

  addFriend(person: PersonModel) {
    this.friendsService.addFriend(person);
    setTimeout(() => {
      if(!this.friends.find(friend => friend.id === person.id)) {
        this.friends.push(person);
      }
    }, 0);
  }

  log(item: any) {
    console.log(item)
  }

  removeFriend(person: PersonModel) {
    this.friendsService.removeFriend(person);
    this.friends = this.friends.filter(friend => friend.id !== person.id)
  }

  // getFriends() {
  //   this.friends = [];
  //   this.friendsService.getFriends()
  //     .subscribe((friends: Array<PersonModel>) => {
  //       friends.map(friend => this.friends.push(friend))
  //     });
  // }
  //
  // getPeople() {
  //   this.people = [];
  //   this.friendsService.getPeople()
  //     .subscribe((people: Array<PersonModel>) => {
  //       people.map(person => this.people.push(person))
  //     });
  // }
  //
  // filter(query: string) {
  //   if(query.length) {
  //     query = query.toLowerCase().trim();
  //     this.people = this.people.filter(person => {
  //       return person.name.toLowerCase().includes(query);
  //     });
  //   } else {
  //     this.getPeople()
  //
  //   }
  // }
  //
  // addFriend(person: PersonModel) {
  //   this.friendsService.addFriend(person);
  //   setTimeout(() => {
  //     if(!this.friends.find(friend => friend.id === person.id)) {
  //       this.friends.push(person);
  //     }
  //   }, 0);
  // }
  //
  // log(item: any) {
  //   console.log(item)
  // }
  //
  // removeFriend(person: PersonModel) {
  //   this.friendsService.removeFriend(person);
  //   this.friends = this.friends.filter(friend => friend.id !== person.id)
  // }
}
