import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogin:boolean=false;
  constructor(private _authservice:AuthService) { }

  ngOnInit(): void {
    this._authservice.userData.subscribe(()=>{
      if(this._authservice.userData.getValue() != null)
      {
        this.islogin=true;
      }
      else
      {
        this.islogin=false;
      }
    });
    
  }

  calllogout(){
    this._authservice.logout();
  }

}
