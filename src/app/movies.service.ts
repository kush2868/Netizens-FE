import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  createMovies(payload:any): Observable<any>{
    return this.httpClient.post("http://localhost:3000/api/v1/" + 'movie', payload)
   }
 
   deleteMovies(id:any): Observable<any>{
     return this.httpClient.delete("http://localhost:3000/api/v1/movie/" + id)
   }
 
   getAllMovies(): Observable<any>{
     return this.httpClient.get("http://localhost:3000/api/v1/movie")
   }

   getMovieById(id:any): Observable<any>{
    return this.httpClient.get("http://localhost:3000/api/v1/movie/" + id)
  }
 
   editMovieData(id:any,payload:any):Observable<any>{
     return this.httpClient.put("http://localhost:3000/api/v1/movie/" +id, payload)
   }
 
}
