import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {GameModel} from "../../shared/game.model";
import {GamesService} from "../../shared/games.service";


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games!: Array<GameModel>;
  form = new FormGroup({
    search: new FormControl()
  });

  constructor(private GamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames()
  }

  getGames() {
    this.GamesService.getGames()
      .subscribe((games: Array<GameModel>) => {
        this.games = games;
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
    return this.GamesService.addGame(game);
  }
}
