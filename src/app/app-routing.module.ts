import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'profile', component: ProfilePageComponent, canActivate:[AuthGuard]},
  {path: 'games', component: GamesPageComponent, canActivate:[AuthGuard]},
  {path: 'library', component: LibraryPageComponent, canActivate:[AuthGuard]},
  {path: 'friends', component: FriendsPageComponent, canActivate:[AuthGuard]},
  {path: '**', redirectTo: 'games', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
