import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddEditMoviesComponent } from './add-edit-movies/add-edit-movies.component';

const routes: Routes = [
  {
    path : '',
    component : MoviesListComponent
  },
  {
    path : 'add',
    component : AddEditMoviesComponent
  },
  {
    path : 'edit/:id',
    component : AddEditMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
