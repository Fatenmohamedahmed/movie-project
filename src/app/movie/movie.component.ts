import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private _movieservice:MoviesService) { }

  moviearray:any[]=[];
  imgprefix:string='https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {

    this._movieservice.getaPi('movie').subscribe((response)=>{
      this.moviearray=response.results;
    })
  }
}
