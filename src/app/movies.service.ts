import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpclient:HttpClient) { }
  
  getaPi(media:string):Observable<any>
  {
    return this._httpclient.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=9c90495b6c7bd591bc142ca41e7e4a86`);
  }
  getmoviedetails(id:string):Observable<any>{
    return this._httpclient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9c90495b6c7bd591bc142ca41e7e4a86`);
  }
  gettvdetails(id:string):Observable<any>{
    return this._httpclient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=9c90495b6c7bd591bc142ca41e7e4a86`);
  }
  getpersondetails(id:string):Observable<any>{
    return this._httpclient.get(`https://api.themoviedb.org/3/person/${id}?api_key=9c90495b6c7bd591bc142ca41e7e4a86`);
  }
}
