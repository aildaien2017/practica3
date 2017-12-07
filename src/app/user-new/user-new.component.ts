import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../shared/services/users.service";
import { User } from "../shared/model/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'at-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css'],
  //providers: [UsersService]
})
export class UserNewComponent implements OnInit {

  user: User;
  values = '';

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

   ngOnInit() {
    
  }

  onKey(event:any) {
    console.log(event);
    this.values = event.target.value;
  }

    
  onSubmit(form: NgForm) {
    //console.log(form.value.firstName)
    this.userService.addUser(form)
    .subscribe(result => {
      // Update OK
      console.log('insert Done', result);
      this.router.navigate(['/dashboard']);
    });
  }

}
