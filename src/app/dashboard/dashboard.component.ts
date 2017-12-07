import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/model/user';
import { UsersService } from '../shared/services/users.service';
@Component({
  selector: 'at-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[];

  // Dependency Injection (DI)
  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((data) =>{
      this.users = data;
      
      /*this.users.map((user) => {
        user.pictureURL = this.userService.getPictureURL(user['poster_path']);
        
      });*/
    });
  }

  
  onSelectUser(user: User): void {
    console.log('user selected', user);
    // redirect to /user/{{user.id}}
    this.router.navigate(['user', user.id]);
  }
  
  onMouseEnter(message: string) {
    console.log(message);
  }
}
