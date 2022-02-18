import { Pipe, PipeTransform } from '@angular/core';
import {GameModel} from "./game.model";

@Pipe({
  name: 'gamesFilter'
})
export class GamesFilterPipe implements PipeTransform {

  transform(
    gamesList: Array<GameModel>,
    searchItem: any,
    fieldName: string
  ): any {
    if(!gamesList.length || !searchItem) return gamesList;

    if(fieldName === 'price') {
      return gamesList.filter((game: GameModel) => game['price'] <= searchItem);
    }

    if(fieldName === 'name') {
      return gamesList.filter((game: GameModel) => {
        return game['name']
          .toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
      });
    }


  }

}
