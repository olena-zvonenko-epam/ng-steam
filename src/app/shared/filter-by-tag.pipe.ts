import { Pipe, PipeTransform } from '@angular/core';
import {GameModel} from "./game.model";

@Pipe({
  name: 'filterByTag'
})
export class FilterByTagPipe implements PipeTransform {

  transform(gamesList: GameModel[], tags: string[]): GameModel[] {

    if(!tags.length) return gamesList;

    return gamesList.filter(game => {
      for(let tag of tags) {
        if(game['tags'].indexOf(tag) === -1) return false
      }
      return true
    });

  }

}
