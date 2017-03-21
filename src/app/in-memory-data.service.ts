import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 1, name: 'Вика', applications: [
        {
          id: 0,
          category: 'fdsf',
          nomination: 'fdsfsd'
        },
        {
          id: 1,
          category: '1fdsf',
          nomination: '1fdsfsd'
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
