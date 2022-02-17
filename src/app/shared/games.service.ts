import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GameModel} from "./game.model";



@Injectable({
  providedIn: 'root'
})
export class GamesService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<GameModel[]>(`${this.url}/games`);
  }

  addGame(game: GameModel) {
    this.getLibrary()
      .subscribe(gameItems => {
        if(gameItems.find(item => item.id === game.id)) {
          return alert(`The game ${game.name} is already in the library` );
        } else {
          alert(`The game ${game.name} was added to the library` );
          return this.http.post(`${this.url}/library`, game, this.httpOptions)
            .subscribe(gameItem => console.log(gameItem))
        }
      });
  }

  getLibrary() {
    return this.http.get<GameModel[]>(`${this.url}/library`);
  }
}
