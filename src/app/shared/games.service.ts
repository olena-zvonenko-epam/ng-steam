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

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<GameModel[]>('http://localhost:3000/games');
  }

  addGame(game: GameModel) {
    console.log(game);
    return this.http.post('http://localhost:3000/library', game,
      this.httpOptions);
  }

  getLibrary() {
    return this.http.get<GameModel[]>('http://localhost:3000/library');
  }
}
