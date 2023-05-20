import { Component } from '@angular/core';
import { Game } from 'src/app/model/game';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss']
})
export class GameAddComponent {
  newGame: Game = {title:'', series:"", platform:"", developer:'', genre:"", release:"", rating: 0}

  constructor(private dataManagerServ: DataManagerService){}

  saveGame(){
    this.dataManagerServ.addGame({...this.newGame});
  }
}
