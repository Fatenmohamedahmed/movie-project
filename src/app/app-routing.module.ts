import { PersondetailsComponent } from './persondetails/persondetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { MovieComponent } from './movie/movie.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'gallery',canActivate:[AuthGuard],component:GalleryComponent},
  {path:'contacts',canActivate:[AuthGuard],component:ContactsComponent},
  {path:'movies',canActivate:[AuthGuard],component:MovieComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'moviedetails/:id',component:MoviedetailsComponent},
  {path:'tvdetails/:id',component:TvdetailsComponent},
  {path:'persondetails/:id',component:PersondetailsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
