import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { AuthInterceptor } from './shared/auth.interceptor';
import { HeaderComponent } from './shared/header/header.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { GameComponent } from './pages/games-page/game/game.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { GamesFilterPipe } from './shared/games-filter.pipe';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { FriendComponent } from './pages/friends-page/friend/friend.component';
import { PeopleFilterPipe } from './shared/people-filter.pipe';
import { FilterByTagPipe } from './shared/filter-by-tag.pipe';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    ProfilePageComponent,
    GamesPageComponent,
    GameComponent,
    GamesFilterPipe,
    LibraryPageComponent,
    FriendsPageComponent,
    FriendComponent,
    PeopleFilterPipe,
    FilterByTagPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
