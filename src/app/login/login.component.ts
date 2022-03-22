import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string='';
  constructor(private _authservice:AuthService , private _router:Router) { }
  loginform:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z]{2,5}$/)]),
  })
  ngOnInit(): void {
  }
  submitform(forminfo:FormGroup){
    this._authservice.login(forminfo.value).subscribe((response)=>{
      if(response.message=='success')
      {
        localStorage.setItem('token',JSON.stringify(response.token));
        this._authservice.decode();
        this._router.navigate(['/home']);
      }
      else
      {
        this.error="Error in email or password";
      }
    })
  }

  gotoregister(){
    this._router.navigate(['/register']);
  }
  

}

