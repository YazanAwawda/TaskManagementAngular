import { Component, OnInit } from '@angular/core';
import {User} from "../../Models/User/User";
import {AuthenticationService} from "../../Services/AuthenticationService/authentication.service";
import {FormBuilder,FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  users !: User  | any;
  userFormGroup !: FormGroup<any> ;

  constructor(private  authService : AuthenticationService ,
              private  fb :  FormBuilder ,

              private  router : Router ) {

    localStorage.clear();
  }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
     email : [' ']   ,
     password : [ ' '  ]
    });

  }
  get email_() {return this.userFormGroup.get('email') ;}
  get password_() {return this.userFormGroup.get('password');}



onLogin() : void{
    const loginObj : User = {
    email : this.email_?.value ,
    password : this.password_?.value
    }

    if(this.userFormGroup.valid){
      this.authService.On_Login(loginObj).subscribe((user: any) => {
        this.users = user ;
        if(this.users != null) {
          localStorage.setItem('token' , this.users.token);
          this.router?.navigate(['list-project']);
            this.authService.updateMenu.next();
        }else {
          alert('Login Failed')
        }
      });
    }


}
}
