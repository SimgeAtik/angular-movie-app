import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { AuthGuard } from './guards/auth.guard';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'liste', component:ListeComponent },
  { path: 'movies/category/:categoryId', component: MoviesComponent},
  { path: 'movies/create', component: MovieCreateComponent, canActivate: [AuthGuard]},
  { path: 'movies/:movieId', component: MovieDetailsComponent},
  { path: 'auth', component: AuthComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
