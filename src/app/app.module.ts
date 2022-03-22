import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { MovieComponent } from './movie/movie.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MoviedetailsComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    MovieComponent,
    GalleryComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    TvComponent,
    TvdetailsComponent,
    PersondetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
