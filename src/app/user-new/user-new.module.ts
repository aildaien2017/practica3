import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material';
import { UserNewComponent } from './user-new.component';
import { UsersService } from '../shared/services/users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserNewModule { }
