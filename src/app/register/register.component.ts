import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error:string='';
  constructor(private _authservice:AuthService ,private _router:Router) { }
  Registerform:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    age:new FormControl(null,[Validators.required,Validators.min(16),Validators.max(88)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z]{2,5}$/)]),
  })
  ngOnInit(): void {
  }
  submitform(forminfo:FormGroup){
    this._authservice.register(forminfo.value).subscribe((response)=>{
      if(response.message=='success')
      {
        this._router.navigate(['/login']);
      }
      else
      {
        this.error="Email is Already Exist";
      }
    })
  }
  gotologin(){
    this._router.navigate(['/login']);
  }

}
