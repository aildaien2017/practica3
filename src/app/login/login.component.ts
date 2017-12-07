import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'at-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    onSubmit(form: NgForm) {
    
    if(form.value.username === "admin" && form.value.password ==="123456"){
      //localStorage.setItem(key: 'username', form.value.username);
      this.router.navigateByUrl("/dashboard");
    }
   
   
  }

}
