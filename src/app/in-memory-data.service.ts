import { InMemoryDbService } from 'angular-in-memory-web-api';
import { categories, nominations } from './hero'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 1, name: 'Павлова Виктория Андреевна', applications: [
        {
          id: 0,
          category: categories[0],
          nomination: nominations[0]
        },
        {
          id: 1,
          category: categories[0],
          nomination: categories[1]
        }]
      },
      {id: 2, name: 'Катя'},
      {id: 3, name: 'Лена'},
      {id: 4, name: 'Ксюша'},
      {id: 4, name: 'Таня'},
      {id: 4, name: 'Маша'}      
    ];
    return {heroes};
  }
}
