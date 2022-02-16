import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {GamesComponent} from "./pages/games/games.component";
import {LibraryPageComponent} from "./pages/library-page/library-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/login-page', pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'profile-page', component: ProfilePageComponent},
  {path: 'games', component: GamesComponent},
  {path: 'library', component: LibraryPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
