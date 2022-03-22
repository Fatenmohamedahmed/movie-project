import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData= new BehaviorSubject(null);
  constructor(private _httpclient:HttpClient , private _router:Router) {
    if(localStorage.getItem('token') != null)
    {
      this.decode();
    }
   }
  decode():void{
    let encodeData=JSON.stringify(localStorage.getItem('token'));
    let decodeData:any=jwtDecode(encodeData);
    this.userData.next(decodeData);
    //console.log(this.userData);
  }

  register(form:object):Observable<any>
  {
    return this._httpclient.post('https://route-egypt-api.herokuapp.com/signup',form);
  }
  login(form:object):Observable<any>
  {
    return this._httpclient.post('https://route-egypt-api.herokuapp.com/signin',form);
  }
  logout():void{
    localStorage.removeItem('token');
    this.userData.next(null);
    this._router.navigate(['/login']);
  }
}
