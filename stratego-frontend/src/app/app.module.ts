import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/game/board/board.component';
import {GameService} from './services/game/game.service';
import { StockComponent } from './components/game/stock/stock.component';
import { WelcomeComponent } from './components/welcome/welcome/welcome.component';
import { LoginComponent } from './components/welcome/login/login.component';
import { SignupComponent } from './components/welcome/signup/signup.component';
import { HeaderComponent } from './components/common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StockComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
