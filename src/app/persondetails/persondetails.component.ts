import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent implements OnInit {

  id:string='';
  persondetails:any={};
  imgprefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { 
    this.id=_ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._MoviesService.getpersondetails(this.id).subscribe((response)=>{
      this.persondetails=response;
    })
  }

}
