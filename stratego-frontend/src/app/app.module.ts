import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/game/board/board.component';
import {GameService} from "./services/game/game.service";
import { StockComponent } from './components/game/stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
