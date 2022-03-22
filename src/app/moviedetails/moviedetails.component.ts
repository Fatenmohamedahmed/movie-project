import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  id:string='';
  moviedetails:any={};
  imgprefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _movieservice:MoviesService , private _ActivatedRoute:ActivatedRoute) {
    this.id=_ActivatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this._movieservice.getmoviedetails(this.id).subscribe((response)=>{
      this.moviedetails=response;
    })
  }

}
