import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  games: Game[];

  constructor() {
    this.games = [
      {
        title: 'Spyro Reignited Edition',
        series: 'Spyro',
        platform: 'Playstation 4/Xbox One/Nintendo Switch/Windows',
        developer: 'Toys For Bob',
        genre: 'Platform',
        release: 'PS4, Xbox One: November 13, 2018 Switch, Windows: September 3, 2019',
        rating: 8
      },
      {
        title: 'Crash Bandicoot: N.Sane Trilogy',
        series: 'Crash Bandicoot',
        platform: 'Playstation 4/Nintendo Switch/Windows/Xbox One',
        developer: 'Vicarous Visions',
        genre: 'Platform',
        release: 'PlayStation 4: June 30, 2017 Nintendo Switch, Windows, Xbox One: June 29, 2018',
        rating: 7
      }
    ]
  }
  addGame(game: Game){
    this.games.push(game);
  }
  deleteGame(gameToDelete: Game){
    this.games = this.games.filter(game => game.title !== gameToDelete.title)
  }
}
