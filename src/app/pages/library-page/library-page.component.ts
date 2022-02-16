import { Component, OnInit } from '@angular/core';
import {GameModel} from "../../shared/game.model";
import {FormControl, FormGroup} from "@angular/forms";
import {GamesService} from "../../shared/games.service";

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {

  games!: Array<GameModel>;

  constructor(private GamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames()
  }

  getGames() {
    this.GamesService.getLibrary()
      .subscribe((games: Array<GameModel>) => {
        this.games = games;
      });
  }

}
