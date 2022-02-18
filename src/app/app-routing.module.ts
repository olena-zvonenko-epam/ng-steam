import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {HeaderComponent} from "./shared/header/header.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {GamesPageComponent} from "./pages/games-page/games-page.component";
import {LibraryPageComponent} from "./pages/library-page/library-page.component";
import {FriendsPageComponent} from "./pages/friends-page/friends-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/login-page', pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'profile-page', component: ProfilePageComponent},
  {path: 'games-page', component: GamesPageComponent},
  {path: 'library', component: LibraryPageComponent},
  {path: 'friends-page', component: FriendsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
