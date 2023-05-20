import { Component } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager.service';
import { GameDetailsComponent } from '../game-details/game-details.component';
import { Game } from 'src/app/model/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  constructor(public dataManagerServ: DataManagerService){
  }
}
