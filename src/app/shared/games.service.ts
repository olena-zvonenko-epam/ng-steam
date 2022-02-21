import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GameModel} from "./game.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  url = environment.FbDbUrl;

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<GameModel[]>(`${this.url}/games.json`);
  }

  addGame(game: GameModel) {
    this.getLibrary()
      .subscribe(gameItems => {
        for(const gameItemsKey in gameItems) {
          if (gameItems[gameItemsKey].id === game.id) {
            return alert(`The game ${game.name} is already in the library`);
          } else {
            alert(`The game ${game.name} was added to the library`);
            return this.http.post(`${this.url}/library.json`, game)
              .subscribe(gameItem => console.log(gameItem))
          }
        }

        // if(gameItems.find(item => item.id === game.id)) {
        //   return alert(`The game ${game.name} is already in the library` );
        // } else {
        //   alert(`The game ${game.name} was added to the library` );
        //   return this.http.post(`${this.url}/library.json`, game)
        //     .subscribe(gameItem => console.log(gameItem))
        // }
      });
  }

  getLibrary() {
    return this.http.get<GameModel[]>(`${this.url}/library.json`);
  }
}
