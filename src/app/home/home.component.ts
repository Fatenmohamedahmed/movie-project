import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieArray:any[]=[];
  tvArray:any[]=[];
  personArray:any[]=[];

  imgprefix:string='https://image.tmdb.org/t/p/w500';

  constructor(private _movieservice:MoviesService) { }

  ngOnInit(): void {
    this._movieservice.getaPi('movie').subscribe((response)=>{
      this.movieArray=response.results.slice(0,10);
    })
    this._movieservice.getaPi('tv').subscribe((response)=>{
      this.tvArray=response.results.slice(0,10);
    })
    this._movieservice.getaPi('person').subscribe((response)=>{
      this.personArray=response.results.slice(0,10);
    })
    console.log(this.movieArray);
  }

}
