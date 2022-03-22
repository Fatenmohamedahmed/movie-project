import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {

  id:string='';
  tvdetails:any={};
  imgprefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) {
    this.id=_ActivatedRoute.snapshot.params['id'];

   }

  ngOnInit(): void {
    this._MoviesService.gettvdetails(this.id).subscribe((response)=>{
      this.tvdetails=response;
    })
  }

}
