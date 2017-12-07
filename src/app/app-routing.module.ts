import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
import { MaterialComponent } 
from './material/material.component';
import { MovieListComponent } 
from './movie-list/movie-list.component';
import { MovieDetailComponent } 
from './movie-detail/movie-detail.component';
import { MovieEditComponent } 
from "./movie-edit/movie-edit.component";
*/
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserNewComponent } from "./user-new/user-new.component";
import { NotFoundComponent } from "./not-found/not-found.component"


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'user/:id/edit',
    component: UserEditComponent
  },
  {
    path: 'user/new',
    component: UserNewComponent
  },
  {
    path: '**', 
    component: NotFoundComponent
  }
  
/*
  {
    path: 'movies',
    component:MovieListComponent
  },
 
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  },
  {
    path: 'movie/:id/edit',
    component: MovieEditComponent
  }
*/ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
