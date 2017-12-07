import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/model/user';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'at-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {
  user: User;
  
  @Input()
  userParam: User;

  @Input()
  defaultPictureURL: string;

  @Output()
  onSelect: EventEmitter<User> = 
      new EventEmitter<User>();

  @Output()
  onMouseEnter: EventEmitter<string> = 
      new EventEmitter<string>();

  constructor(private activatedRoute: ActivatedRoute, 
        private userService: UsersService,
        private router: Router) { }

  ngOnInit() {
  }

  onClick(user: User) {
    this.onSelect.emit(user);
  }

  onMouseEnterUser(user: User) {
    this.onMouseEnter
    .emit(`Mouse enter: ${this.userParam.firstName}`);
  }

  onDelete(user) {
    
    this.userService.deleteUser(user)
    .subscribe(result => {
      console.log('Delete completed');
      location.reload();
    });
  }

}
