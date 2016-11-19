import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Bulbasaur'},
            {id: 12, name: 'Ivysaur'},
            {id: 13, name: 'Venusaur'},
            {id: 14, name: 'Charmander'},
            {id: 15, name: 'Charmeleon'},
            {id: 16, name: 'Charizard'},
            {id: 17, name: 'Squirtle'},
            {id: 18, name: 'Wartortle'},
            {id: 19, name: 'Blastoise'},
            {id: 20, name: 'Caterpie'},
            {id: 21, name: 'Metapod'},
            {id: 22, name: 'Butterfree'}
        ];
        return {heroes};
    }
}
