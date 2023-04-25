import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = "https://netizens-backend.onrender.com/api/v1/";
  constructor(private httpClient: HttpClient) { }

  createMovies(payload: any): Observable<any> {
    return this.httpClient.post(this.url + 'movie', payload)
  }

  deleteMovies(id: any): Observable<any> {
    return this.httpClient.delete(this.url +  "movie/" + id)
  }

  getAllMovies(): Observable<any> {
    return this.httpClient.get(this.url + "movie")
  }

  getMovieById(id: any): Observable<any> {
    return this.httpClient.get(this.url + "movie/" + id)
  }

  editMovieData(id: any, payload: any): Observable<any> {
    return this.httpClient.put(this.url + "movie/" + id, payload)
  }

}
