import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, 
         MatIconModule,
         MatButtonModule } from '@angular/material';

import { MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MovieListModule } from './movie-list/movie-list.module';
//import { MovieDetailComponent } from './movie-detail/movie-detail.component';
//import { MovieEditComponent } from './movie-edit/movie-edit.component';

import { LoginComponent } from './login/login.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserNewComponent } from './user-new/user-new.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import { UserFormComponent } from './user-form/user-form.component';

//import {UserEditModule} from './user-edit/user-edit.module'


@NgModule({
  declarations: [
    AppComponent,
    //MovieDetailComponent,
    //MovieEditComponent,
    LoginComponent,
    UserEditComponent,
    UserNewComponent,
    NotFoundComponent,
    //UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    //MovieListModule,
    //UserEditModule,
    FormsModule,
    DashboardModule,
    LoginModule,
    MatListModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
