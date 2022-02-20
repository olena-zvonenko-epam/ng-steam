import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {GamesComponent} from "./pages/games/games.component";
import {LibraryPageComponent} from "./pages/library-page/library-page.component";
import {AuthGuard} from "./shared/auth.guard";

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'profile', component: ProfilePageComponent, canActivate:[AuthGuard]},
  {path: 'games', component: GamesComponent, canActivate:[AuthGuard]},
  {path: 'library', component: LibraryPageComponent, canActivate:[AuthGuard]},
  {path: '**', redirectTo: 'games', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
