import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './shared/header/header.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { GameComponent } from './pages/games-page/game/game.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { GamesFilterPipe } from './shared/games-filter.pipe';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { FriendComponent } from './pages/friends-page/friend/friend.component';
import { PeopleFilterPipe } from './shared/people-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    ProfilePageComponent,
    GamesPageComponent,
    GameComponent,
    LibraryPageComponent,
    GamesFilterPipe,
    FriendsPageComponent,
    FriendComponent,
    PeopleFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
