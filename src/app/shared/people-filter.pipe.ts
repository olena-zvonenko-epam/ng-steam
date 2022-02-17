import { Pipe, PipeTransform } from '@angular/core';
import {PersonModel} from "./person.model";

@Pipe({
  name: 'peopleFilter'
})
export class PeopleFilterPipe implements PipeTransform {

  transform(peopleList: Array<PersonModel>, searchItem: string): Array<PersonModel> {
    return peopleList.filter((person: PersonModel) => {
      return person['name']
        .toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
    });
  }

}
