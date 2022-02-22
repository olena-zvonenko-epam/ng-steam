import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {GameModel} from "../../shared/game.model";
import {GamesService} from "../../shared/games.service";


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games = new Array<GameModel>();

  @Input() searchValue!: string;
  @Input() rangeInputValue!: number;

  form = new FormGroup({
    search: new FormControl()
  });

  checkboxGroup = new FormGroup({
    indie: new FormControl(),
    action: new FormControl(),
    adventure: new FormControl()
  });

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames()
  }

  getGames() {
    this.games = [];
    this.gamesService.getGames()
      .subscribe((games: Array<GameModel>) => {
        games.map(game => this.games.push(game))
      });
  }

  filter(query: string) {
    if(query.length) {
      query = query.toLowerCase().trim();
      this.games = this.games.filter(game => {
        return game.name.toLowerCase().includes(query);
      });
    } else {
      this.getGames()
    }
  }

  addGame(game: GameModel) {
    return this.gamesService.addGame(game);
  }

  getValue(event: Event): any {
    return (event.target as HTMLInputElement);
  }

  log(item: any) {
    console.log(typeof item, item);
  }

}
