import { AuthService } from './auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-project';

    //logout automatic after specific time
  //constructor(_authservice:AuthService){
   // _authservice.userData.subscribe(()=>{
     // if(_authservice.userData.getValue() != null)
      //{
        //setTimeout(()=>{_authservice.logout()},50000);
     // }
//    })}
}
