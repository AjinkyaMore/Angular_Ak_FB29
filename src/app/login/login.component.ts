import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup} from '@angular/forms';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router) { }
  
  loginForm !: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:[],
      password:[]
    });
  }

  onLogin()
  {
    let un = this.loginForm.controls['username'].value;
    let ps = this.loginForm.controls['password'].value;

    if(un==="admin" && ps==="1234")
    {
      alert("Login success....! =" +un+ " => " +ps);
      this.router.navigateByUrl('admin');
      console.log(this.loginForm.value);
    }
    else
    {
      alert("Invalid username or password ...!!");
    }
    
  }

}
