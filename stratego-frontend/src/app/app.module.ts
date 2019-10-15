import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './components/game/board/board.component';

import {StockComponent} from './components/game/stock/stock.component';
import {WelcomeComponent} from './components/lobby/welcome/welcome.component';
import {LoginComponent} from './components/users/login/login.component';
import {SignupComponent} from './components/users/signup/signup.component';
import {HeaderComponent} from './components/common/header/header.component';
import {NavbarComponent} from './components/common/navbar/navbar.component';

import {ManualComponent} from './components/common/manual/manual.component';

import {LobbyComponent} from './components/lobby/lobby.component';
import {CreateGameComponent} from './components/lobby/create-game/create-game.component';
import {JoinGameComponent} from './components/lobby/join-game/join-game.component';
import {GameComponent} from './components/game/game.component';

import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer'; // unused for the moment

import {DropdownDirective} from './shared/dropdown.directive'; // Unused for the moment

import {GameService} from './services/game/game.service';
import {DataService} from './services/data.service';
import {FormsModule} from '@angular/forms';
import { PasswordResetComponent } from './components/users/password-reset/password-reset.component';
import { ContinueGameComponent } from './components/lobby/continue-game/continue-game.component';
import { CreditsComponent } from './components/common/credits/credits.component';
import { StockBlueComponent } from './components/game/stock-blue/stock-blue.component';


const appRoutes: Routes = [
  // Lobby Path's
  {path: 'credits', component: CreditsComponent},
  {path: '', component: WelcomeComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/signup', component: SignupComponent},
  {path: 'users/passwordReset', component: PasswordResetComponent},
  {path: 'lobby', component: LobbyComponent},
  {path: 'manual', component: ManualComponent},
  // Game Path's
  {path: 'game', component: GameComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StockComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    NavbarComponent,
    DropdownDirective,
    ManualComponent,
    LobbyComponent,
    CreateGameComponent,
    JoinGameComponent,
    GameComponent,
    PasswordResetComponent,
    ContinueGameComponent,
    CreditsComponent,
    StockBlueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [GameService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
