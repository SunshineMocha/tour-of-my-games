import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { FirstUpperPipe } from './pipes/first-upper.pipe';
import { GameAddComponent } from './components/game-add/game-add.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { NgbAccordionBody, NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    FirstUpperPipe,
    GameAddComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgbAccordionModule,
    CommonModule,
    NgbCollapse
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
