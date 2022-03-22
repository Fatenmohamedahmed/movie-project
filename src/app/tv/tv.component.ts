import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tvArray:any[]=[];
  constructor(private _movieservice:MoviesService) { }

  imgprefix:string='https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    this._movieservice.getaPi('tv').subscribe((response)=>{
      this.tvArray=response.results;
    })
  }

}
