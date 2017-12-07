import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../shared/services/users.service";
import { User } from "../shared/model/user";

@Component({
  selector: 'at-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UsersService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userService.getUser(params.id)
          .subscribe(user => {
            this.user = user;
            this.user['nameCopy'] = user.firstName;
          });
      });
  }
  
  onSave(user: User) {
    this.userService.updateUser(user)
    .subscribe(result => {
      // Update OK
      console.log('Update Done', result);
      this.router.navigate(['/dashboard']);
    });
  }

}
