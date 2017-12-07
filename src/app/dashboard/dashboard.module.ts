import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { UsersService } from '../shared/services/users.service';
import { DashboardItemComponent} from '../dashboard-item/dashboard-item.component'

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    HttpClientModule
  ],
  declarations: [DashboardComponent, DashboardItemComponent], providers: [UsersService]
})
export class DashboardModule { }
