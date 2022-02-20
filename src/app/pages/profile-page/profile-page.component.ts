import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../../shared/user.model";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;
  message!: string;
  user!: UserModel;

  constructor(
    private userServise: UserService
  ) {}

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      username: new FormControl(null),
      age: new FormControl(null),
    })
  }

  // getUser() {
  //   this.userServise.getUser()
  //     .subscribe((user: UserModel) => {
  //       games.map(game => this.games.push(game))
  //     });
  // }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: UserModel = {
      email: this.form.value.email,
      username: this.form.value.username,
      age: this.form.value.age,
    };

    this.userServise.getUser(user).subscribe(() => {
      this.submitted = false;
    })

  }

  // getUser() {
  //   this.GamesService.getGames()
  //     .subscribe((games: Array<GameModel>) => {
  //       this.games = games;
  //     });
  // }

}
