import {Component, Input, OnInit, } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {GameModel} from "../../shared/game.model";
import {GamesService} from "../../shared/games.service";


@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  games = new Array<GameModel>();
  tags = new Array<string>();

  @Input() checkboxTags!: Array<string>;
  @Input() searchValue!: string;
  @Input() rangeInputValue!: number;

  form = new FormGroup({
    search: new FormControl()
  });

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
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

  getMinPrice(arr: GameModel[]): string {
    return String(Math.min(...arr.map(item => item.price)));
  }

  getMaxPrice(arr: GameModel[]): string {
    return String(Math.max(...arr.map(item => item.price)));
  }

  filterByTag(event: any) {
    if(event.target.checked) {
      this.tags.push(event.target.name);
    } else {
      this.tags = this.tags.filter(tag => tag !== event.target.name);
    }

    this.getGames();

    setTimeout(() => {
      this.games = this.games.filter(game => {
        for(let tag of this.tags) {
          if(game.tags.indexOf(tag) === -1) return false
        }
        return true
      });
    }, 300)


  }

}
