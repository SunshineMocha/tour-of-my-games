import { Component, Input } from '@angular/core';
import { Game } from 'src/app/model/game';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent {
  @Input() gameDetail?: Game;
  /*emettitori di output*/
  constructor (private dataManagerServ: DataManagerService){}
    deleteGame(){
    if (this.gameDetail) {
      this.dataManagerServ.deleteGame(this.gameDetail);
    }
  }
}
